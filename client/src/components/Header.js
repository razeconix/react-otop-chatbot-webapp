import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Header extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li >
        <Link to={'/login'}>เข้าสู่ระบบ(admin)</Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
          ออกจากระบบ(admin)
          </a>
        </li>
      </ul>
    )

    return (
        <nav>
        <div className="nav-wrapper orange darken-3">
            <Link to ={'/shop'} className="brand-logo">สินค้า OTOP</Link>
            {localStorage.usertoken ? userLink : loginRegLink}
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to={'/shop'}>สินค้า</Link></li>
                <li><Link to={'/about'}>เกี่ยวกับเรา</Link></li>
                {/*<li><Link to={'/register'}>register</Link></li>*/}
            </ul>
            
        </div>
        </nav>
    )
  }
}

export default withRouter(Header)



