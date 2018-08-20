import React from 'react'
import ProductForm from '../product-form/product-form'
import ProductItem from '../product-item/product-item'

export default class ProductList extends React.Component{
    render(){
        const { products } = this.props
        return(
            <section>
                <ProductForm/>
                <ul className ={"productList"}>
                    { 
                        products.map(product => 
                            <li key={product.asin}>
                                <ProductItem asin={product.asin} name={product.name}/>
                            </li>)
                    }
                </ul>
            </section>
        )
    }
}