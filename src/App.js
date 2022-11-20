import Contacts from './Components/Contacts';
import Header from './Components/Header';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


const  App = () => {
  return (
    <div className="App">
      <Header />
      <div className='container'>
      <Contacts />
      </div>
      
    </div>
  );
}

export default App;
