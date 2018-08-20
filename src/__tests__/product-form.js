'use strict';

import React from 'react'
import {render, fireEvent, cleanup, wait} from 'react-testing-library'
import 'jest-dom/extend-expect'
import axios from 'axios'
import ProductForm from '../products/product-form/product-form'



afterEach(cleanup)

describe('Add Products',()=>{
    it('should make an API call',async ()=>{
        const url = "https://maacaro-analytics-api.herokuapp.com/products"
        axios.post.mockImplementationOnce(() => Promise.resolve({data: {greeting: 'hello there'}}));
        const {getByText, getByLabelText } = render(<ProductForm url={url} />)
        const asin = getByLabelText('Product asin:')
        const productName = getByLabelText('Product Name:')

        asin.value = "ASIN"
        productName.value ="Product Name"

        fireEvent.click(getByText('Add Product'))

        await wait()

        expect(axios.post).toHaveBeenCalledTimes(1)
        expect(axios.post).toHaveBeenCalledWith(url,{asin: asin.value, name: productName.value})
    })
})
