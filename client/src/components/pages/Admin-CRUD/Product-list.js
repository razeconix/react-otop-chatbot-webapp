import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = props => (
  <tr>
    <td width="100"><img src={props.product.img} alt="" style={{height:100,width:100}}></img></td>
    <td width="100">{props.product.product_name}</td>
    <td width="450">{props.product.description}</td>
    <td width="100">{props.product.price}</td>
    <td width="100">{props.product.category}</td>
    <td>
      <Link to={"/profile/edit/"+props.product._id}>แก้ไข</Link> | <a href="/#/profile" onClick={() => { props.deleteProduct(props.product._id) }}>ลบ</a>
    </td>
  </tr>
)

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this)

    this.state = {products: []};
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

  deleteProduct(id) {
    axios.delete('https://enigmatic-chamber-67174.herokuapp.com/products/'+id)  
      .then(response => { console.log(response.data)});
    
    this.setState({
        products: this.state.products.filter(el => el._id !== id)
    })
    
  }

  productList() {
    return this.state.products.map(currentproduct => {
      return <Product product={currentproduct} deleteProduct={this.deleteProduct} key={currentproduct._id}/>;
    })
  }
  
//<a href="/profile/create" class="waves-effect waves-light btn">เพิ่มสินค้า</a> 
  render() {
    return (
      <div>
      <h3>รายการสินค้า</h3>
      <Link to={"/profile/create"} class="waves-effect waves-light btn">เพิ่มสินค้า</Link>
      <table class="highlight">
        <thead>
          <tr>  
            <th>รูป</th>
            <th>ชื่อสินค้า</th>
            <th>รายละเอียด</th>
            <th>ราคา</th>
            <th>หมวดหมู่</th>
            <th>การจัดการ</th>
          </tr>
        </thead>
        <tbody>
          { this.productList() }
        </tbody>
      </table>
    </div>
    )
  }
}
export default ProductList