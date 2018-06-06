import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import * as contentful from 'contentful';
var client = contentful.createClient({
  space: 'xche690pbrqv',
  accessToken: 'b116f8156897c9c7ff3bfd3fd9c2c3148b694fd1244a65b2ddccf23fbb53e3a2' })
client.getEntries().then(entries => {
  entries.items.forEach(entry => {
    if(entry.fields) {
      console.log(entry.fields)
    }
  })
})
ReactDOM.render(<Router>
    <App />
  </Router>, document.getElementById('root'));

