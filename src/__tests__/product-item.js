import React from 'react'
import {render, fireEvent, cleanup, wait} from 'react-testing-library'
import 'jest-dom/extend-expect'
import axios from 'axios'
import ProductItem from '../product-item/product-item'

afterEach(cleanup)

describe("ProductItem",()=>{
    it('should display name and asin', async ()=>{
        const url = "https://app.scrapinghub.com/api/run.json"
        axios.post.mockImplementationOnce(() => Promise.resolve({status: 'OK', jobId:'34443'}));
        const product = {
            asin: "product asin",
            name: "product name"
        }
        const {getByText} = render(<ProductItem product={product}/>)
        
        fireEvent.click(getByText('Crawl'))
        

    })
})