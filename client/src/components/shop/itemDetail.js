import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class itemDetail extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
          products: []
        };
    }

    componentDidMount() {
        axios.get('https://enigmatic-chamber-67174.herokuapp.com/products/'+this.props.match.params.id) //http://localhost:5000 ต้องเปลี่ยนเวลาอัพ Heroku ใช้ https://enigmatic-chamber-67174.herokuapp.com
          .then(response => {
            this.setState({
              product_name: response.data.product_name,
              description: response.data.description,
              price: response.data.price,
              category: response.data.category,
              img:  response.data.img
            })   
          })
          .catch(function (error) {
            console.log(error);
          })
          
      }

/* ไว้ทดลองเปลี่ยนแบบ
 return  <div class="col s12 m4 l4 ">
                <div class="card" style={{ width: 240}}>
                <div class="card-image">
                  <img src={item.img}/>
             <span class="card-title">{item.product_name}</span>
                </div>
                <div class="card-content">
             <p>{item.description}</p>
                </div>
                <div class="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
             </div>*/

    render() {
        return (
        
                <div class="col s12 m4 l4 ">
                <div class="card" style={{ width: 250}} key={this.state._id}>
                <div class="card-image">
                  <img src={this.state.img} style={{width: 250,height:250}}/>
                </div>
                <div class="card-content">
                <span class="card-title">{this.state.product_name}</span>
                <p>หมวดหมู่: {this.state.category}</p>
                <p>ราคา {this.state.price} บาท</p>
                </div>
              </div>
             </div>
        
             )


    }
    
  }
  export default itemDetail