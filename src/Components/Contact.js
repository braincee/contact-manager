import React, { Component } from 'react';

class Contact extends Component {

  state = {};

  onShowClick =  e => {};

  render() {

  const { name, email, phone} = this.props.contact;

  return (
    <div className='card card-body mb-3'>
     <h6>{name} <i  onClick={this.onShowClick}
        className="fas fa-sort-down" 
     />
     </h6>
     <ul className='list-group'>
        <li className='list-group-item'> Email: {email}</li>
        <li className='list-group-item'> Phone: {phone}</li>
     </ul>
    </div>
  )
}
}

export default Contact;