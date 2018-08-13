import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductForm from './product-form/product-form';
import ProductItem from './product-item/product-item'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Amazon Reviews Analytics</h1>
        </header>
        <main>
          <ProductForm/>
          <ProductItem asin={'1563118793'} name={'some name'}/>
        </main>
      </div>
    );
  }
}

export default App;
