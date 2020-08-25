// make React available
import React from 'react';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

// make the App component available
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />,  div);
  ReactDOM.unmountComponentAtNode(div)
})