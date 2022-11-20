import React from 'react'

const Contact = (props) => {
    const { contact } = props;
  return (
    <div className='card card-body mb-3'>
     <h6>{contact.name}</h6>
     <ul className='list-group'>
        <li className='list-group-item'> Email: {contact.email}</li>
        <li className='list-group-item'> Phone: {contact.phone}</li>
     </ul>
    </div>
  )
}

export default Contact;