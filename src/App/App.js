import './App.css';
import Navbar from '../Components/Navbar/Navbar'
import Content from '../Components/Content/Content';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <div className="App">
    <Provider store={store}>
      <Navbar />
      <Content />
    </Provider>  
    </div>
  );
}

export default App;
