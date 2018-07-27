import React from 'react'
import Link from 'gatsby-link'
import './Header.less'

const Header = ({ siteTitle }) => (
  <div className="Header">
      <div className="HeaderGroup">
       <Link to="/"> 
        <img src={require('../images/figma_logo.svg')} alt=""/>
       </Link>
       <Link to='/'>Features</Link>
       <Link to='/'>About</Link>
       <Link to='/'>Login</Link>
       <Link to='/'><button>Sign Up</button></Link>
      </div>
  </div>
)

export default Header
