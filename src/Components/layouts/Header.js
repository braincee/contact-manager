import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-secondary mb-3 py-0'>
          <div className='container'>
            <a href = '/' className='navbar-brand'>CONTACT MANAGER</a>
            <div>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <NavLink to = '/' className='nav-link'><i className='fa fa-home'/>Home</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to = '/contacts' 
                  className='nav-link'><i className='fa fa-plus'/>Add
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to = '/about' className='nav-link'><i className='fa fa-question'/>About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  )
}

Header.defaultProps = {
    header: "My App"
}


export default Header;