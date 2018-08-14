import React from 'react'
import ProductForm from '../product-form/product-form'
import ProductItem from '../product-item/product-item'

export default class ProductList extends React.Component{
    state = {
        products:[
            {asin:'1563118793',name:'Some Book about Ford'}
        ]
    }
    render(){
        const { products } = this.state
        return(
            <div>
                <ProductForm/>
                <ul>
                    { products.map(product => 
                        <li>
                            <ProductItem asin={product.asin} name={product.name}/>
                        </li>)}
                </ul>
            </div>
        )
    }
}