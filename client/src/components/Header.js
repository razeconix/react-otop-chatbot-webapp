import React from 'react';
import {Link} from 'react-router-dom';

const Header =() =>(
        <nav>
            <div className="nav-wrapper">
                <Link to ={'/'} className="brand-logo">สินค้า OTOP</Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to={'/shop'}>สินค้า</Link></li>
                    <li><Link to={'/about'}>เกี่ยวกับเรา</Link></li>
                    <li><Link to={'/login'}>เข้าสู่ระบบ(admin)</Link></li>
            
                </ul>
            </div>
        </nav>
)

export default Header;