import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Shop from './shop/Shop';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Chatbot from './Chatbot/Chatbot';



const App =() => (
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/shop" component={Shop} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/profile" component={Profile}/>
                    

                        <Chatbot/>
                        
                        
                    </div>
                </BrowserRouter>
            </div>
)   


export default App;