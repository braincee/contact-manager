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
            <>
            <div className="display-4 mb-3"> List of Contacts</div>
                {contacts.map(contact => 
                <Contact 
                key={contact.id}
                contact={contact}
                />)}
            </>
            )
           }}
         </Consumer>
       )
    }
}

export default Contacts;