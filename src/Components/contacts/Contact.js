import React, { Component } from 'react';
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {

  state = {
    showContactInfo: false
  };

  onDeleteClick = (id, dispatch) => {
     
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => dispatch({type: 'DELETE_CONTACT', payload: id}));

  };

  render() {

  const { showContactInfo } = this.state;

  const { id, name, email, phone} = this.props.contact;

  return (

  <Consumer>
    {value => {
      const { dispatch } = value;
      return (
        <div className='card card-body mb-3'>
        <h6>{name} <i  onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })}
           className="fas fa-sort-down" 
           style={{cursor: 'pointer'}}
        />
        <i className='fas fa-times' 
        style={{cursor: 'pointer', float: 'right', color: 'red'}}
        onClick={this.onDeleteClick.bind(this, id, dispatch)}
        />
        </h6>
        {showContactInfo ? ( <ul className='list-group'>
           <li className='list-group-item'> Email: {email}</li>
           <li className='list-group-item'> Phone: {phone}</li>
        </ul>) : null}
       
       </div>
      )
    }}
  </Consumer>
  )
}
}

export default Contact;