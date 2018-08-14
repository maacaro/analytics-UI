import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from'./product-list/product-list'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const Dashboard = () =>{
  return (
    <div>
      DASHBOARD
    </div>
    )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Amazon Reviews Analytics</h1>
        </header>
        <Router>
          <main>
            <ProductList/>
            <div>
              <Route path="/dashboard" component ={Dashboard}/>
            </div>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
