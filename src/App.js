import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/layouts/Header';
import Contacts from './Components/contacts/Contacts';
import { Provider } from './context';
import About from './Components/pages/About';
import AddContact from './Components/contacts/AddContact';
import EditContact from './Components/contacts/EditContact';
import NotFound from './Components/pages/NotFound';

 
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';



class App extends Component {

  render() {

  return (
  <Provider>
    <Router>
      <div className="App">
        <Header />
        <div className='container'>
          <Switch>
          <Route exact path = '/contacts' component={Contacts}/>
          <Route exact path = '/' component={AddContact}/>
          <Route exact path = '/contact/edit/:id' component={EditContact}/>
          <Route exact path = '/about' component={About}/>
          <Route component={NotFound}/>
          </Switch>
        </div>
        
      </div>
    </Router>
  </Provider>
  );
  }
}

export default App;
