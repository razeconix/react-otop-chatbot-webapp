
import React, { Component } from 'react';
import axios from 'axios/index'
import Cookies from 'universal-cookie';
import {v4 as uuid} from 'uuid';
import { withRouter } from 'react-router-dom';
import Message from './Message';
import Card from './Card';
import QuickReplies from './QuickReplies';
const cookies = new Cookies();

class Chatbot extends Component {
    messagesEnd;
    talkInput;
         constructor(props) {
                 super(props);
                 this._handleInputKeyPress = this._handleInputKeyPress.bind(this);
                 this._handleQuickReplyPayload = this._handleQuickReplyPayload.bind(this);
                 this.hide = this.hide.bind(this);
                 this.show = this.show.bind(this);
                 this.state = {
                     messages: [],
                     showBot: true,
                     shopWelcomeSent: false
                };
                if(cookies.get('userID')===undefined){
                    cookies.set('userID',uuid(),{path:'/'});
                }
                console.log(cookies.get('userID'));
                
            }

                async df_text_query (text) {
                        let says = {
                            speaks: 'user',
                            msg: {
                                text : {
                                    text: text
                                }
                            }
                        }
                        this.setState({ messages: [...this.state.messages, says]});
                        const res = await axios.post('/api/df_text_query',  {text,userID:cookies.get('userID')});
                
                        for (let msg of res.data.fulfillmentMessages) {
                            console.log(JSON.stringify(msg));
                            says = {
                                speaks: 'bot',
                                msg: msg
                            }
                            this.setState({ messages: [...this.state.messages, says]});
                        }
                    };
                
                
                    async df_event_query(event) {
                
                        const res = await axios.post('/api/df_event_query',  {event,userID:cookies.get('userID')});
                
                        for (let msg of res.data.fulfillmentMessages) {
                            let says = {
                                speaks: 'bot',
                                msg: msg
                            }
                
                            this.setState({ messages: [...this.state.messages, says]});
                        }
                    };

                    _handleQuickReplyPayload(event, payload, text) {
                        
                        event.preventDefault();
                        event.stopPropagation();
                
                        switch (payload) {
                            case 'recommend_yes':
                                this.df_event_query('SHOW_RECOMMENDATIONS');
                                break;
                            //แนะนำสินค้าจากหมวดหมู่
                                case 'recommend_food':
                                this.df_event_query('SHOW_FOOD');
                                break;
                            case 'recommend_apparel':
                                    this.df_event_query('SHOW_APPAREL');
                                break;
                            case 'recommend_herb':
                                    this.df_event_query('SHOW_HERB');
                                break;
                            case 'recommend_beverage':
                                    this.df_event_query('SHOW_BEVERAGE');
                                break;
                            default:
                                this.df_text_query(text);
                                break;
                        }
                
                    }

                    renderCards(cards){
                        return cards.map((card, i) => <Card key={i} payload={card.structValue}/>);

                    }
                    renderOneMessage(message,i){
                        if (message.msg && message.msg.text && message.msg.text.text) {
                            return <Message key={i} speaks={message.speaks} text={message.msg.text.text}/>;
                        } else if(message.msg && message.msg.payload.fields.cards) { //message.msg.payload.fields.cards.listValue.values) {
                            return <div key={i}>
                                <div className="card-panel grey lighten-5 z-depth-1">
                                        <div style={{overflow: 'hidden'}}>
                                            <div className="col s2">
                                                <a href="/" className="btn-floating btn-large waves-effect waves-light red">{message.speaks}</a>
                                             </div>
                                             <div style={{overflow:'auto' ,overflowY:'scroll'}}>
                                                     <div style={{ height: 300, width:message.msg.payload.fields.cards.listValue.values.length * 270}}>
                                                            {this.renderCards(message.msg.payload.fields.cards.listValue.values)}
                                                    </div>
                                             </div>

                                        </div>
                                </div>

                            </div>
                        }else if (message.msg &&
                            message.msg.payload &&
                            message.msg.payload.fields &&
                            message.msg.payload.fields.quick_replies
                        ) {
                            return <QuickReplies
                                text={message.msg.payload.fields.text ? message.msg.payload.fields.text : null}
                                key={i}
                                replyClick={this._handleQuickReplyPayload}
                                speaks={message.speaks}
                                payload={message.msg.payload.fields.quick_replies.listValue.values}/>;
                        }
                    }
                    
            renderMessages(stateMessages){
                    if(stateMessages){
                            return stateMessages.map((message,i)=>{
                               return this.renderOneMessage(message,i);
                            });
                    }else {
                            return null;
                    }
            }
            resolveAfterXSeconds(x) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve(x);
                    }, x * 1000);
                })
            }
        
            async componentDidMount() {
                await this.resolveAfterXSeconds(1);
                this.df_event_query('Welcome');
                
        if (window.location.pathname === '/shop' && !this.state.shopWelcomeSent) {
            this.df_event_query('WELCOME_SHOP');
            this.setState({ shopWelcomeSent: true, showBot: true });
        }

        this.props.history.listen(() => {
            if (this.props.history.location.pathname === '/shop' && !this.state.shopWelcomeSent) {
                this.df_event_query('WELCOME_SHOP');
                this.setState({ shopWelcomeSent: true, showBot: true });
            }
        });
        }
            componentDidUpdate(){
                this.messagesEnd.scrollIntoView({behaviour: "smooth"});
                if ( this.talkInput ) {
                    this.talkInput.focus();
                }
            }
        
            show(event) {
                event.preventDefault();
                event.stopPropagation();
                this.setState({showBot: true});
            }
        
            hide(event) {
                event.preventDefault();
                event.stopPropagation();
                this.setState({showBot: false});
            }

        

        _handleInputKeyPress(e){
            if(e.key === 'Enter'){
                this.df_text_query(e.target.value);
                e.target.value = '';

            }
        }
            
    render() {
        if (this.state.showBot) {
            return (
                <div style={{ minHeight: 500, maxHeight: 500, width:400, position: 'fixed', bottom: 0, right: 0, border: '1px solid lightgray',background:'white'}}>
                    <nav>
                        <div className="nav-wrapper">
                            <a href="/" onClick={this.hide}  className="brand-logo">ChatBot</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="/" onClick={this.hide}>ซ่อน</a></li>
                            </ul>
                        </div>
                    </nav>

                    <div id="chatbot"  style={{ minHeight: 388, maxHeight: 388, width:'100%', overflow: 'auto'}}>
                    {this.renderMessages(this.state.messages)}
                        <div ref={(el) => { this.messagesEnd = el; }}
                             style={{ float:"left", clear: "both" }}>
                        </div>
                    </div>
                    <div className=" col s12" >
                        <input style={{margin: 0, paddingLeft: '1%', paddingRight: '1%', width: '98%'}} ref={(input) => { this.talkInput = input; }} placeholder="type a message:"  onKeyPress={this._handleInputKeyPress} id="user_says" type="text" />
                    </div>

                </div>
            );
        } else {
            return (
                <div style={{ minHeight: 40, maxHeight: 500, width:400, position: 'fixed', bottom: 0, right: 0, border: '1px solid lightgray',radius:5}}>
                    <nav>
                        <div className="nav-wrapper">
                            <a href="/"  onClick={this.show} className="brand-logo">ChatBot</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="/" onClick={this.show}>แสดง</a></li>
                            </ul>
                        </div>
                    </nav>

                    
                    <div ref={(el) => {this.messagesEnd = el;}} 
                        style={{float:"left",clear:"both"}}>
                        </div>
                        </div>
                        );
        }
    }
}


export default withRouter(Chatbot); 