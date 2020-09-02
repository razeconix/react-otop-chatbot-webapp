import React, { Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Filter from './Filter';

class itemList extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
          products: []

   
        };
    }

    componentDidMount() {
        axios.get('https://enigmatic-chamber-67174.herokuapp.com/products/') //http://localhost:5000 ต้องเปลี่ยนเวลาอัพ Heroku ใช้ https://enigmatic-chamber-67174.herokuapp.com
          .then(response => {
            this.setState({ products: response.data })
          })
          .catch((error) => {
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
                  <div>
                  <Filter/>
                  </div>
             {this.state.products.map(item => {
                return  <div class="col s12 m4 l4 ">
              
                <div class="card hoverable" style={{ width: 250}} key={item._id}>
                  {/*-----------------------*/}
                
                <div class="card-image">
                  <img src={item.img} alt={item.img} style={{width: 250,height:250}}/>
                </div>
                  {/*-----------------------*/}
                <div class="card-content">
                <span class="card-title">{item.product_name}</span>
                <p>หมวดหมู่ {item.category}</p>
                <p>ราคา {item.price} บาท</p>
                </div>
                  {/*-----------------------*/}
                <div class="card-action">
                <Link to={"/product/detail/"+item._id}>ดูสินค้า</Link>
                </div>

              </div>
             </div>
             })}
             </div>
             </div>
             
            
            )
            }
    
    
  }
  export default itemList