import React,{ Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'


class About extends Component {
    
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
                <h1 class="header center black-text ">เกี่ยวกับเรา</h1>
                <div class="row center">
                  <h5 class="header col s12 light black-text">แนวคิดการจัดทำเว็บไซต์นี้ขึ้นเพื่อรวบรวมข้อมูลเกี่ยวกับสินค้าหนึ่งตำบลหนึ่งผลิตภัณท์ของจังหวัดพิษณุโลก 
                  และต้องการผสมผสานเทคโนโลยีแชทบอทเข้ากับเว็บไซต์ OTOP เพื่อให้ผู้เข้าชมสามารถมีส่วนร่วมสามารถพูดคุยกับแชทบอทได้</h5>
                </div>
               
                <br/><br/>
        
              </div>
            </div>
            
          </div>
          

          <div class="section">
              <div className="container">
         <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper center">
            <div class="col s2">
              <img src="https://i.imgur.com/OB0h76T.jpg"  alt="" class="circle responsive-img"/> 
            </div>
            <div class="col s10">
                <h6>จัดทำโดย</h6>
              <h5>นาย กิรติพันธุ พันธุ์มาก</h5>
              <p>นิสิต ป.ตรี สาขาเทคโนโลยีสารสนเทศ มหาวิทยาลัยนเรศวร</p>
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





export default About;

