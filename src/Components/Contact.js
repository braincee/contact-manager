import React, { Component } from 'react';

class Contact extends Component {

  state = {
    showContactInfo: false
  };

  onDeleteClick = () => {
    this.props.deleteClickHandler();
  }

  render() {

  const { showContactInfo } = this.state;

  const { name, email, phone} = this.props.contact;

  return (
    <div className='card card-body mb-3'>
     <h6>{name} <i  onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })}
        className="fas fa-sort-down" 
        style={{cursor: 'pointer'}}
     />
     <i className='fas fa-times' 
     style={{cursor: 'pointer', float: 'right', color: 'red'}}
     onClick={this.onDeleteClick}
     />
     </h6>
     {showContactInfo ? ( <ul className='list-group'>
        <li className='list-group-item'> Email: {email}</li>
        <li className='list-group-item'> Phone: {phone}</li>
     </ul>) : null}
    
    </div>
  )
}
}

export default Contact;