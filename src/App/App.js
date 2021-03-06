import './App.css';
import Navbar from '../Components/Navbar/Navbar'
import Content from '../Components/Content/Content';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import FilteredContent from '../Components/FilteredContent/FilteredContent';
import PostView from '../Components/PostVeiw/PostView';
import SubredditVeiw from '../Components/SubredditView/SubredditView';
import SearchResults from '../Components/SearchResults/SearchResults';
import NoMatch from '../Components/NoMatch/NoMatch';
import { useEffect } from 'react';
import { updateBodyTheme } from '../Helpers/helpers';
import useLocalStorage from 'use-local-storage';

const App = () => {

  const [theme] = useLocalStorage('app-theme', 'light');
  
  useEffect(() => {
    updateBodyTheme(theme);
  },[theme]) 

  return (
    <div className="App" data-testid='App'>
        <Provider store={store}>
          <Router basename='/'>
            <Navbar />
            <Routes>
              <Route path='/' element={<Content />} />
              <Route path='/hot'  element={<FilteredContent />} />
              <Route path='/new' element={<FilteredContent  />} />
              <Route path='/rising' element={<FilteredContent  />} />
              <Route path='/top' element={<FilteredContent  />} />
              <Route path='/post/:subreddit/:postID' element={<PostView />} />
              <Route path='/subreddit/:subreddit' element={<SubredditVeiw />} />
              <Route path='/search/:searchTerm' element={<SearchResults />} />
              <Route path='*' element={<NoMatch />} />
            </Routes>
          </Router> 
        </Provider>  
    </div>
    
  );
}

export default App;
