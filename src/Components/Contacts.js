import React from 'react';
import Contact from './Contact';
import { Consumer } from '../context';

class Contacts extends React.Component {

    deleteContact = (id) => {
        const { contacts } = this.state;

        const newContacts = contacts.filter(contact => contact.id !== id)

       this.setState({
        contacts: newContacts
       });
    }

    render() {
       return (
        <Consumer>
           {value => {

            const { contacts } = value;
            return (
            <div>
                {contacts.map(contact => 
                <Contact 
                key={contact.id}
                contact={contact}
                deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />)}
            </div>
            )
           }}
         </Consumer>
       )
    }
}

export default Contacts;