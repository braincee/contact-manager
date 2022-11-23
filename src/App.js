import Contacts from './Components/contacts/Contacts';
import Header from './Components/layouts/Header';
import { Provider } from './context';
 
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AddContact from './Components/contacts/AddContact';


const  App = () => {
  return (
    <Provider>
      <div className="App">
        <Header />
        <div className='container'>
          <AddContact />
        <Contacts />
        </div>
        
      </div>
    </Provider>
  );
}

export default App;
