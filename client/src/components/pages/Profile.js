import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import ProductList from './Admin-CRUD/Product-list';


class Profile extends Component {
  constructor() {
    super()
    this.state = {
     
      email: '',
      password:'',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      email: decoded.email,
      password: decoded.password
    })
  }

  render() {
    return ( 
      <div className="container">
              <ProductList/>
      </div> 
    )
  
    
    
  }
}


export default Profile
