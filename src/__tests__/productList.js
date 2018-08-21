'use strict';

import React from 'react'
import {render, fireEvent, cleanup, wait} from 'react-testing-library'
import 'jest-dom/extend-expect'
import axios from 'axios'
import ProductList from '../products/product-list/product-list'

xdescribe('ProductList',()=>{
    xit('Call the API to get the List of Product',()=>{
        const products = [
            { name:"some name", asin: "some asin" },
            { name:"another name", asin: "anotherr asin"}
        ]
        axios.get.mockImplementationOnce(() => Promise.resolve(products));

        const { getByText } = render(<ProductList product={products}/>)
    
        expect(axios.get).toHaveBeenCalledTimes(1)
    })
})