import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class CreateProduct extends Component {
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

    axios.post('https://enigmatic-chamber-67174.herokuapp.com/products/add', product) //http://localhost:5000 ต้องเปลี่ยนเวลาอัพ Heroku ใช้ https://enigmatic-chamber-67174.herokuapp.com
      .then(res => console.log(res.data));

      window.location = "https://enigmatic-chamber-67174.herokuapp.com/profile"; // เวลา Deploy <Link to={"/profile"}></Link>  || '/profile'
    
  }

  render() {
    return (
    <div>
      <h3>เพิ่มสินค้า</h3>
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
          <label>ประเภท: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.category}
              onChange={this.onChangeCategory}
              />
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
          <input type="submit" value="เพิ่มสินค้า" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}

