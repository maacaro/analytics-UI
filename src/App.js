import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './product-list/product-list'
import Dashboard from './dashboard/dashboard'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Amazon Reviews Analytics</h1>
        </header>
        <Router>
          <main>
            <Route exact path = "/" component={ProductList}/>
            <Route path="/dashboard/:asin" render ={ props =>{
                const { asin } = props.match.params
                return(<Dashboard asin={asin}/>)
                }
              }
            />
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
