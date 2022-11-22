import Contacts from './Components/Contacts';
import Header from './Components/Header';
import { Provider } from './context';
 
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


const  App = () => {
  return (
    <Provider>
      <div className="App">
        <Header />
        <div className='container'>
        <Contacts />
        </div>
        
      </div>
    </Provider>
  );
}

export default App;
