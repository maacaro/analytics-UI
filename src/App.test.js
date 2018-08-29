import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'

it('renders without crashing', async () => {
  const div = document.createElement('div');
  axios.get.mockImplementationOnce(() => Promise.resolve({data:[]}));
  await ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
