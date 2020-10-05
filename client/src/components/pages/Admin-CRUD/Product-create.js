import React, { Component} from 'react';
import axios from 'axios';


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
      img:'',
      imageUrl: '',
      imageAlt: null
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
      img: e.target.value = this.state.imageUrl
    })
  }

  handleImageUpload = () => {
    const { files } = document.querySelector('input[type="file"]')
const formData = new FormData();
formData.append('file', files[0]);
// replace this with your upload preset name
formData.append('upload_preset', 'zyrlt2x1');
const options = {
  method: 'POST',
  body: formData,
};

// replace cloudname with your Cloudinary cloud_name
return fetch('https://api.cloudinary.com/v1_1/otop-chatbot-phitsanulok/image/upload', options)
  .then(res => res.json())
  .then(res => {
    this.setState({
      img: res.secure_url,
      imageAlt: `An image of ${res.original_filename}`
    })
  })
  .catch(err => console.log(err));
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
      .then(res => console.log(res.data))
      .catch(err => {
        console.log(err);
      })

     
    
      this.props.history.push('/profile');
      //window.location = "https://enigmatic-chamber-67174.herokuapp.com/profile"; // เวลา Deploy <Link to={"/profile"}></Link>  || '/profile'
    
  }

  render() {
    const { img, imageAlt } = this.state;
    return (
    <div className="container">
      <h3>เพิ่มสินค้า</h3>
      <form onSubmit={this.onSubmit}>
      {img && (
            <img src={img} alt={imageAlt} style={{width:'auto',height:150}}className="displayed-image"/>
          )}
        <div class="file-field input-field">
      <div class="btn">
        <span>เลือกรูปภาพสินค้า</span>
        <input type="file"/>
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text"/>
      </div>
    </div>


    <button type="button" className="btn" onClick={this.handleImageUpload} value={this.state.img}>อัพโหลดและดูรูป</button>

      <div className="form-group"> 
      <br/>
      <br/>
          <label>ชื่อสินค้า: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.product_name}
              onChange={this.onChangeProductName}
              />
        </div>
        <div className="form-group"> 
          <label>รายละเอียด: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>ราคา:</label>
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
      <option value="สมุนไพร">สมุนไพร</option>
      <option value="เครื่องดื่ม">เครื่องดื่ม</option>
      <option value="เครื่องแต่งกาย">เครื่องแต่งกาย</option>
      <option value="ของใช้และของตกแต่ง">ของใช้และของตกแต่ง</option>
      </select>
        </div>
        <br/>
        <br/>
        <div className="form-group">
          <input type="submit" value="เพิ่มสินค้า" className="btn btn-primary" />
        </div>
        <br/>
        <br/>
      </form>
    </div>
    )
  }
}

