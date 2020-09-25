import React, { Component } from 'react';
import axios from 'axios';

export default class EditProduct extends Component {
  constructor(props) {
    super(props);

    this.onChangeProductName = this.onChangeProductName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeImg = this.onChangeImg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      product_name: '',
      description: '',
      price: 0,
      category: '',
      img:''
    }
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

  onChangeProductName(e) {
    this.setState({
        product_name: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }
 onChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    })
  }

  onChangeImg(e) {
    this.setState({
      img: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    
    
    const product = {
        product_name: this.state.product_name,
        description: this.state.description,
        price: this.state.price,
        category: this.state.category,
        img:this.state.img
      }
  
      console.log(product);

      axios.post('https://enigmatic-chamber-67174.herokuapp.com/products/update/' + this.props.match.params.id, product)//http://localhost:5000 ต้องเปลี่ยนเวลาอัพ Heroku ใช้ https://enigmatic-chamber-67174.herokuapp.com
      .then(res => console.log(res.data));

      this.props.history.push('/profile');
    
  }
  render() {
    return (
    <div className="container">
      <h3>แก้ไขข้อมูลสินค้า</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>ชื่อสินค้า: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.product_name}
              onChange={this.onChangeProductName}
              />
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>ราคา</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.price}
              onChange={this.onChangePrice}
              />
        </div>
        <div className="form-group">
          <label>หมวดหมู่: </label>
          <select className="browser-default" value={this.state.category} onChange={this.onChangeCategory}>
          <option value="" disabled selected>เลือกหมวดหมู่</option>
      <option value="อาหาร">อาหาร</option>
      <option value="หมุนไพร">สมุนไพร</option>
      <option value="เครื่องดื่ม">เครื่องดื่ม</option>
      <option value="เครื่องแต่งกาย">เครื่องแต่งกาย</option>
      </select>
        </div>
        <div className="form-group">
          <label>รูป: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.img}
              onChange={this.onChangeImg}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="แก้ไข" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}


