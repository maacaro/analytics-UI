import React from 'react'
import {render, fireEvent, cleanup, wait} from 'react-testing-library'
import 'jest-dom/extend-expect'
import axios from 'axios'
import ProductItem from '../product-item/product-item'

afterEach(cleanup)

describe("ProductItem",()=>{
    it('should display name and asin', async ()=>{
        const url = "https://app.scrapinghub.com/api/run.json"
        const data ="project=320403&spider=amazon-reviews-spider&asin=1563118793"

        const headers = {
            'content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic OTczZDlkOWFhN2NiNDkwMGFjYjU4M2IzYmQyOGQ4MDc6T1RjelpEbGtPV0ZoTjJOaU5Ea3dNR0ZqWWpVNE0ySXpZbVF5T0dRNE1EYzY='
        }

        const { getByText } = render(<ProductItem asin={"1563118793"} name={"Ford book"}/>)
        
        axios.post.mockImplementationOnce(() => Promise.resolve({status: 'OK', jobId:'34443'}));
        
        fireEvent.click(getByText('Crawl'))
        
        expect(axios.post).toHaveBeenCalledTimes(1)
        expect(axios.post).toHaveBeenCalledWith(url,data,{ headers })
    })
})