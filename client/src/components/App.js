import React from 'react';
import {  Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Landing from './pages/Landing';
import About from './pages/About';
import Shop from './shop/Shop';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Chatbot from './Chatbot/Chatbot';
import CreateProduct from './pages/Admin-CRUD/Product-create';
import EditProduct from './pages/Admin-CRUD/Product-edit';
import ItemDetail from './shop/itemDetail';







const App =() => (
            <div>
                <HashRouter>
                    <div>
                        
                        <Header/>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/shop" component={Shop} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route exact path="/profile/create" component={CreateProduct}/>
                        <Route exact path="/profile/edit/:id" component={EditProduct}/>
                        <Route exact path="/product/detail/:id" component={ItemDetail}/>
                        <Chatbot/>
                        <Footer/>
                        
                        
                    </div>
                    
                </HashRouter>
            </div>
)   


export default App;