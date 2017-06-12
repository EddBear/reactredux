import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component and this component should product some HTML
const App = () => {
  return <div>Hi!</div>;
}

// Take this comoponent's generated HTML and put it on the page (DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
