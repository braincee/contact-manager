import React, { Component } from 'react';
import { Consumer } from '../../context';
import { v4 as uuidv4 } from 'uuid';
import TextInptGroup from '../layouts/TextInptGroup';

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: ''
    };

    onSubmit = (dispatch, event) => {
        event.preventDefault();

        const { name, email, phone } = this.state;

        const newContact = {
            id: uuidv4(),
            name,
            email, 
            phone,
        }
       dispatch({type: 'ADD_CONTACT', payload: newContact});

       this.setState({
        name: '',
        email: '',
        phone: ''
       });
        
    }

    onChange = (event) => this.setState({[event.target.name]: event.target.value})

  render() {
        const { name, email, phone } = this.state;

        return (
          <Consumer>
            {value => {
              const { dispatch } = value;
              return (
                <div className='card mb-3'>
                <div className='card-header'>Add Contact</div>
                <div className='card-body'>
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                   <TextInptGroup 
                   label = "Name"
                   name = "name"
                   placeholder='Enter your name'
                   value = {name}
                   onChange = {this.onChange}
                   />
                   <TextInptGroup
                   Label = "Email"
                   name = 'email'
                   type = 'email'
                   placeholder='Enter your email'
                   value = {email}
                   onChange = {this.onChange}
                   />
                   <TextInptGroup 
                   label = 'Phone'
                   name = 'phone'
                   placeholder='Enter your phone'
                   value = {phone}
                   onChange = {this.onChange}
                   />
                   <input type="submit" value="Add Contact"
                   className="btn btn-secondary btn-block mt-2"
                   />
                  </form>
                </div>
               </div>
              );
            }}
          </Consumer>
        );
    }
}


export default AddContact;