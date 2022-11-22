import React, { Component } from 'react';

const Context = React.createContext();

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