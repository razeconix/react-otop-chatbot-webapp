import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = props => (
  <tr>
    <td>{props.product.product_name}</td>
    <td>{props.product.description}</td>
    <td>{props.product.price}</td>
    <td>{props.product.category}</td>
    <td>{props.product.img}</td>
    <td>
      <Link to={"/profile/edit/"+props.product._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProduct(props.product._id) }}>delete</a>
    </td>
  </tr>
)

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this)

    this.state = {products: []};
  }

  async componentDidMount() {
     await axios.get('/products/')
      .then(response => {
       this.setState({ products: response.data })
     })
    .catch((error) => {
        console.log(error);
      })
  }

  deleteProduct(id) {
    axios.delete('/products/'+id)
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

  render() {
    return (
      <div>
        <h3>Logged Product</h3>
        <a href="/profile/create" class="waves-effect waves-light btn">เพิ่มสินค้า</a>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>product_name</th>
              <th>description</th>
              <th>price</th>
              <th>category</th>
              <th>img</th>
              <th>Actions</th>
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