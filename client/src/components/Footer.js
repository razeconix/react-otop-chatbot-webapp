import React from 'react';


const Footer =() =>(
   
    <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">สินค้า OTOP จังหวัดพิษณุโลก</h5>
          <p className="grey-text text-lighten-4">เว็บไซต์นี้จัดทำขึ้นเพื่อนำเสนอข้อมูลสินค้าหนึ่งตำบลหนึ่งผลิตภัณฑ์ของจังหวัดพิษณุโลก</p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">รายการ</h5>
          <ul>
            <li><a className="grey-text text-lighten-3" href="/#/">หน้าแรก</a></li>
            <li><a className="grey-text text-lighten-3" href="#/shop">สินค้า</a></li>
            <li><a className="grey-text text-lighten-3" href="/#/about">เกี่ยวกับเรา</a></li>
            
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      
      </div>
    </div>
  </footer>
)

export default Footer;