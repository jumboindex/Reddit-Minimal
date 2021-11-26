import './App.css';
import Navbar from '../Components/Navbar/Navbar'
import Content from '../Components/Content/Content';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FilteredContent from '../Components/FilteredContent/FilteredContent';
import PostView from '../Components/PostVeiw/PostView';


const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/hot'  element={<FilteredContent />} />
            <Route path='/new' element={<FilteredContent  />} />
            <Route path='/rising' element={<FilteredContent  />} />
            <Route path='/top' element={<FilteredContent  />} />
            <Route path='/post/:subreddit/:postID' element={<PostView />} />
          </Routes>
        </Router>
      </Provider>  
    </div>
  );
}

export default App;
