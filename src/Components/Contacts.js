import React from 'react';
import Contact from './Contact';

class Contacts extends React.Component {
 state = {
        contacts: [
            {
                id: 1,
                name: 'Steve',
                email: 'steve@email.com',
                phone: '0543431263'
            }, 

            {
                id: 2,
                name: 'Oduro',
                email: 'oduro@email.com',
                phone: '0549080786'
            },

            {
                id: 3,
                name: 'Gloria',
                email: 'gloria@email.com',
                phone: '0542134578'
            },

        ],
    };

    render() {
        const { contacts } = this.state;
        return <div>
            {contacts.map(contact => 
            <Contact 
            key={contact.id}
            contact={contact}
            />)}
        </div>;
    }
}

export default Contacts;