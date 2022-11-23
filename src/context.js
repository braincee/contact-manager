import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_CONTACT':
        return {
            ...state,
            contacts: state.contacts.filter(contact => contact.id !== action.payload)
        }
        default: 
        return state;
  }
}

export class Provider extends Component {
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
        dispatch: action => this.setState(state => reducer(state, action))
    
    };

    render () {
        return (
            <Context.Provider value={this.state}>
                 {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;