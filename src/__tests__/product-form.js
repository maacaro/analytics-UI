'use strict';

import React from 'react'
import {render, fireEvent, cleanup, wait} from 'react-testing-library'
import 'jest-dom/extend-expect'
import axios from 'axios'
import ProductForm from '../products/product-form/product-form'



afterEach(cleanup)

describe('Add Products',()=>{
    it('should make an API call',async ()=>{
        const onSubmit = jest.fn(()=>{});
        const {getByText, getByPlaceholderText } = render(<ProductForm onSubmit = {onSubmit} />)
        const asin = getByPlaceholderText('Asin')

        asin.value = "ASIN"

        fireEvent.click(getByText('Add'))

        await wait()

        expect(onSubmit).toHaveBeenCalledTimes(1)
    })
})
