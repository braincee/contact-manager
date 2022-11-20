import Contact from './Components/Contact';
import Header from './Components/Header';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


const  App = () => {
  return (
    <div className="App">
      <Header />
      <div className='container'>
      <Contact 
      name = "Stephen" 
      email = "steve@email.com"
       phone = "0543431263"/>
      </div>
      
    </div>
  );
}

export default App;
