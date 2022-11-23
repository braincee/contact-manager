import React from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends React.Component {
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
                />)}
            </div>
            )
           }}
         </Consumer>
       )
    }
}

export default Contacts;