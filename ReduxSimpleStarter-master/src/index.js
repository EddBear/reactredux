import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAEhJ_gLarQ7-JCBxIquVV05vG7B_Aaoyw';
// Create a new component and this component should product some HTML
const App = () => {
  return (
      <div>
      <SearchBar/>
      </div>
  );
}

// Take this comoponent's generated HTML and put it on the page (DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
