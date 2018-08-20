import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ProductList from './products/product-list/product-list'
import Dashboard from './dashboard/dashboard'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  state = {
    products:[]
  }

  componentDidMount= async ()=>{
    const url = 'https://maacaro-analytics-api.herokuapp.com/products' 
    try {
      const products = await axios.get(url)  
      this.setState({
        products: [...products.data]
      })
    } 
    catch(err) {
      console.log('error geting products:',err);
    }
  }
  render() {
    const { products } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Amazon Reviews Analytics</h1>
        </header>
        <Router>
          <main>
            <Route exact path = "/" render={props => {
                return(<ProductList products={products} />)
              }
            }/>
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
