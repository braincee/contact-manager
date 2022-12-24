import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInptGroup from '../layouts/TextInptGroup';
import axios from 'axios';

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

    onSubmit = async (dispatch, event) => {
        event.preventDefault();

        const { name, email, phone } = this.state;

        // Error handling

        if (name === '') {
          this.setState({errors: {name: 'Name is required'}});
          return;
        }

        if (email === '') {
          this.setState({errors: {email: 'Email is required'}});
          return;
        }
        
        if (phone === '') {
            this.setState({errors: {phone: 'Phone Number is required'}});
            return;
        }

        // Context API

        const newContact = {
            name,
            email, 
            phone,
        }

        const response = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
        dispatch({type: 'ADD_CONTACT', payload: response.data});

       // Clear fields

       this.setState({
        name: '',
        email: '',
        phone: '', 
        errors: {}
       });

       // redirect

       this.props.history.push('/contacts');   
    }

    onChange = (event) => this.setState({[event.target.name]: event.target.value})

  render() {
        const { name, email, phone, errors } = this.state;

        return (
          <Consumer>
            {value => {
              const { dispatch } = value;
              return (
                <div className='card mb-3'>
                <div className='card-header bg-secondary'>ADD CONTACT</div>
                <div className='card-body'>
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                   <TextInptGroup 
                   label = "Name"
                   name = "name"
                   placeholder='Enter your name'
                   value = {name}
                   onChange = {this.onChange}
                   error = {errors.name}
                   />
                   <TextInptGroup
                   label = 'Email'
                   name = 'email'
                   type = 'email'
                   placeholder='Enter your email'
                   value = {email}
                   onChange = {this.onChange}
                   error = {errors.email}
                   />
                   <TextInptGroup 
                   label = 'Phone'
                   name = 'phone'
                   placeholder='Enter your phone'
                   value = {phone}
                   onChange = {this.onChange}
                   error = {errors.phone}
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