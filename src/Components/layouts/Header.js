import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { RiCloseCircleFill } from 'react-icons/ri'


const Header = () => {

  const [ nav, setNav ] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-secondary mb-3 py-0'>
          <div className='container'>
            <a href = '/' className='navbar-brand'>CONTACT MANAGER</a>
            <div className='right-nav'>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <NavLink to = '/' className='nav-link'><i className='fa fa-plus'/>ADD</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to='/contacts' 
                  className='nav-link'><i className='fa fa-home'/>ALL CONTACTS
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to = '/about' className='nav-link'><i className='fa fa-question'/>ABOUT
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className='menu'><BiMenu size={40} onClick={handleNav}/></div>
          </div>
          <div className={nav ? 'nav-links' : 'nav-links-1'}>
            <div className='close'><RiCloseCircleFill size={40} onClick={handleNav}/></div>
            <ul className="links">
              <li><Link to='/' onClick={() => setNav(!nav)}>ADD</Link></li>
              <li><Link to='/contacts' onClick={() => setNav(!nav)}>ALL CONTACTS</Link></li>
              <li><Link to='/about' onClick={() => setNav(!nav)}>ABOUT</Link></li>
            </ul>
          </div>
        </nav>
  )
}

Header.defaultProps = {
    header: "My App"
}


export default Header;