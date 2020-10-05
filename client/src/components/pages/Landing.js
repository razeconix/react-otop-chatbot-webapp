import React,{ Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'


class Landing extends Component {
    
    componentDidMount() {
        M.AutoInit();
    }
    render() {
        return (
            <div>
            <div id="index-banner" class="parallax-container">
            <div class="section no-pad-bot">
              <div class="container">
                <br/><br/>
                <h1 class="header center white-text ">สินค้า OTOP จังหวัดพิษณุโลก</h1>
                <div class="row center">
                  <h5 class="header col s12 light white-text">A modern responsive front-end framework based on Material Design</h5>
                </div>
                <div class="row center">
                  <a href="https://enigmatic-chamber-67174.herokuapp.com/#/shop" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">เข้าชมสินค้า</a>
                </div>
                <br/><br/>
        
              </div>
            </div>
            <div class="parallax"><img src="https://blog.traveloka.com/th/wp-content/uploads/sites/5/2019/04/%E0%B9%80%E0%B8%99%E0%B8%B4%E0%B8%99%E0%B8%A1%E0%B8%B0%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%87-1-800x534.jpg" alt="Unsplashed background img 1" style={{transform: (-50, 207.579, 0), opacity: 1}} /></div>
          </div>
        
        
          <div class="container">
            <div class="section">
        
              
              <div class="row">
                <div class="col s12 m4">
                  <div class="icon-block">
                    <h2 class="center brown-text"><i class="material-icons">flash_on</i></h2>
                    <h5 class="center">Speeds up development</h5>
        
                    <p class="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                  </div>
                </div>
        
                <div class="col s12 m4">
                  <div class="icon-block">
                    <h2 class="center brown-text"><i class="material-icons">group</i></h2>
                    <h5 class="center">User Experience Focused</h5>
        
                    <p class="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                  </div>
                </div>
        
                <div class="col s12 m4">
                  <div class="icon-block">
                    <h2 class="center brown-text"><i class="material-icons">settings</i></h2>
                    <h5 class="center">Easy to work with</h5>
        
                    <p class="center light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                  </div>
                </div>
              </div>
        
            </div>
          </div>
          </div>
        )
      }
    }





export default Landing;

