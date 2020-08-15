import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import ProductList from './Admin-CRUD/Product-list';


class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }

  //componentDidMount() {
    //const token = localStorage.usertoken
    //const decoded = jwt_decode(token)
   // this.setState({
    //  first_name: decoded.first_name,
    //  last_name: decoded.last_name,
    //  email: decoded.email
    //})
  //}

  render() {
    return (
      
      <div className="container">
        
       <ProductList/>
      </div> 
    )
  
    
    
  }
}


export default Profile
