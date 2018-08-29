import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ProductForm from './products/product-form/product-form'
import ProductItem from './products/product-item/product-item'
import Dashboard from './dashboard/dashboard'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import qs from 'qs'; 

class App extends Component {
  state = {
    products:[]
  }
  
  handleSubmit = event => {
    event.preventDefault()
    const asin = event.target.elements.asin.value
    const url = "https://maacaro-analytics-api.herokuapp.com/products"
    const headers = {
        'content-type': 'application/x-www-form-urlencoded',
    }
    const data = {
      asin: asin  
    }
    axios.post(url,qs.stringify(data),{ headers })
      .then(res =>{
        console.log(res)
        this.setState({
          products:[...this.state.products, res.data]
        })
      }).catch(err => console.log(err))
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
      <div>
        <header className="App-header">
          <h1 className="App-title">Amazon Reviews Analytics</h1>
        </header>
        <Router>
          <main>
            <Route exact path = "/" render={props => {
                return(
                  <React.Fragment>
                    <section className={"form-section"}>
                        <ProductForm onSubmit = { this.handleSubmit}/>
                    </section>
                    <section className={"list-section"}>    
                        <ul className ={"productList"}>
                            { 
                                products.map(product => 
                                    <li className={"item-list"}key={product.asin}>
                                        <ProductItem asin={product.asin} name={product.name}/>
                                    </li>)
                            }
                        </ul>
                    </section>
                  </React.Fragment>
                )
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
