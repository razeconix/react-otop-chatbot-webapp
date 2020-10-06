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
                  <h5 class="header col s12 light white-text">เว็บไซต์ที่รวบรวมข้อมูลเกี่ยวกับสินค้าหนึ่งตำบลหนึ่งผลิตภัณท์ของจังหวัดพิษณุโลก</h5>
                </div>
                <div class="row center">
                  <a href="https://enigmatic-chamber-67174.herokuapp.com/#/shop" id="download-button" class="btn-large waves-effect waves-orange white black-text ">เข้าชม</a>
                </div>
                <br/><br/>
        
              </div>
            </div>
            <div class="parallax"><img src="https://i.imgur.com/9CLy7rC.jpg" alt="Unsplashed background img 1" style={{transform: (-50, 207.579, 0), opacity: 1}} /></div>
          </div>
        
        
          <div class="container">
            <div class="section">
              <div class="row">
                <div class="col s12 m4">
                  <div class="icon-block">
                  <img src="https://www.otopphitsanulok.com/wp-content/uploads/2019/08/FOOD-1-1024x814.png" alt="img" style={{width:300, height:300}}></img>
                    <h5 class="center">อาหาร</h5>
        
                    <p class="light">รวบรวมผลิตภัณฑ์ที่เป็นอาหารทั้งของคาวและของหวาน เช่น กล้วยตาก,ข้าวตัง,ปลาส้ม เป็นต้น</p>
                  </div>
                </div>
        
                <div class="col s12 m4">
                  <div class="icon-block">
                  <img src="https://www.otopphitsanulok.com/wp-content/uploads/2019/08/FABRIC-APPAREL-1024x1024.png" alt="img" style={{width:300, height:300}}></img>
                    <h5 class="center">เครื่องแต่งกาย</h5>
        
                    <p class="light">ผลิตภัณฑ์จากผ้าทอมือและการย้อมสีจากธรรมชาติ เช่น ผ้าขาวม้า,ผ้ามัดหมี่,ผ้าทอมือหมักยางกล้วย เป็นต้น</p>
                  </div>
                </div>
        
                <div class="col s12 m4">
                  <div class="icon-block">
                  <img src="https://www.otopphitsanulok.com/wp-content/uploads/2019/08/BEVERAGE-1-1024x701.png" alt="img" style={{width:300, height:300}}></img>
                    <h5 class="center">เครื่องดื่ม</h5>
        
                    <p class="center light">ผลิตภัณฑ์จากเกษตรกรในจังหวัด เช่น น้ำตาลสด,ไวน์วังพิกุล,ชาดอกกาแฟ เป็นต้น</p>
                  </div>
                </div>
              </div>

              <div class="container">
            <div class="section">
              <div class="row">
                <div class="col s12 m6">
                  <div class="icon-block">
                  <img src="https://www.otopphitsanulok.com/wp-content/uploads/2019/08/APPARTUS-DECORATION-1024x1024.png" alt="img" style={{width:300, height:300}}></img>
                    <h5 class="center">ของใช้และของตกแต่ง</h5>
        
                    <p class="light">ผลิตภัณฑ์ที่เป็นงานฝีมือ เช่น พระพุทธชินราชในซุ้มเรือนแก้ว,ดอกไม้จากดินปั้น,กระเป๋าเสื่อกก,ไม้กวาดดอกหญ้า เป็นต้น</p>
                  </div>
                </div>

                <div class="col s12 m6">
                  <div class="icon-block">
                  <img src="https://www.otopphitsanulok.com/wp-content/uploads/2019/08/HERB-NON-FOOD-1024x1024.png" alt="img" style={{width:300, height:300}}></img>
                    <h5 class="center">สมุนไพร</h5>
        
                    <p class="light">ผลิตภัณฑ์ที่มีสรรพคุณบำรุงต่างๆ เช่น ลูกประคบสมุนไพร,เยลลี่เซรั่ม,กระชายดำ เป็นต้น</p>
                  </div>
                </div>

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

