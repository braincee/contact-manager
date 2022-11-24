import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
    const { header } = props;
  return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'>
          <div className='container'>
            <a href = '/' className='navbar-brand'>{header}</a>
            <div>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <NavLink to = '/' className='nav-link'><i className='fa fa-home'/>Home</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to = '/contact/add' 
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