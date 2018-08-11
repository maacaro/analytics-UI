import React, {Component} from 'react';
import axios from 'axios'

export default class ProductForm extends Component {
    handleSubmit = event => {
        event.preventDefault()
        const asin = event.target.elements.asin.value
        const productName = event.target.elements.productName.value
        const url = "https://maacaro-analytics-api.herokuapp.com/products"
        
        axios.post(url,{
            name: productName,
            asin: asin  
        })
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className ="Form center">
                    <div className = "row">
                        <div className="col-35"><label htmlFor="asin">Product asin:</label></div> 
                        <div  className="col-65"><input type="text" name="asin" id="asin"/></div>
                    </div>
                    <div className= "row">
                        <div className="col-35"><label htmlFor="productName">Product Name:</label></div> 
                        <div  className="col-65"><input type="text" name="productName" id="productName"/></div> 
                    </div>
                <button type="submit">Add Product</button>
                </form>
        </div>
        )
    }
}