import React, { Component } from 'react';
import axios from 'axios';



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
          <div class="row" style={{paddingTop:30}}>
          <div class="container">
          <div class="col s12 m8 l6">
                <img class="responsive-img" alt={this.state.img} src={this.state.img}/>
              </div>
          

             <div class="col s12 m4 l4 ">
               
                <div class="card-content">
                <blockquote>
                    <h3 class="card-title">{this.state.product_name}</h3>
                    </blockquote><br/>
                    <p><b>รายละเอียดสินค้า</b><br/>{this.state.description}</p>
                <p><b>หมวดหมู่ </b> {this.state.category}</p>
                <p><b>ราคา</b> {this.state.price} บาท</p>
                </div>
                  {/*-----------------------*/}
              </div>
             </div>
             </div>
  

        
             )


    }
    
  }
  export default itemDetail