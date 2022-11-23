import React, { Component } from 'react';

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: ''
    };

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    onChange = (event) => this.setState({[event.target.name]: event.target.value})

  render() {
        const { name, email, phone } = this.state;
        return (
         <div className='card mb-3'>
          <div className='card-header'>Add Contact</div>
          <div className='card-body'>
            <form onSubmit={this.onSubmit}>
             <div className='form-group'>
                 <label htmlFor='name'>Name</label>
                 <input 
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder='Enter your name ...'
                    value = {name}
                    onChange = {this.onChange}
                 />
                 
             </div>
             <div className='form-group'>
                 <label htmlFor='name'>Email</label>
                 <input 
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder='Enter your email ...'
                    value = {email}
                    onChange = {this.onChange}
                 />
                 
             </div>
             <div className='form-group'>
                 <label htmlFor='name'>Phone</label>
                 <input 
                    type="text"
                    name="phone"
                    className="form-control form-control-lg"
                    placeholder='Enter your phone number ...'
                    value = {phone}
                    onChange = {this.onChange}
                 />
                 
             </div>
             <input type="submit" value="Add Contact"
             className="btn btn-secondary btn-block mt-2"
             />
            </form>
          </div>
         </div>
        );
    }
}


export default AddContact;