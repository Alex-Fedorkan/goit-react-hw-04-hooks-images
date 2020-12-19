import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import SearchResults from './components/SearchResults/SearchResults';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <Searchbar onSubmit={setSearchQuery} />
      <SearchResults searchQuery={searchQuery} />
      <ToastContainer />
    </div>
  );
};

export default App;
