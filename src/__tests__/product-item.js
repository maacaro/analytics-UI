import React from 'react'
import {render, fireEvent, cleanup, wait} from 'react-testing-library'
import 'jest-dom/extend-expect'
import axios from 'axios'
import ProductItem from '../product-item/product-item'

afterEach(cleanup)

describe("ProductItem",()=>{
    it('should make an  scrapy API call', async ()=>{
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

    it('should make an API call to the products/{asin}/reviews/analyze endpoint, when the user click on the analyze button',async()=>{
        const asin = '1563118793'
        const url = "https://maacaro-analytics-api.herokuapp.com/products/"+asin+"/reviews/analyze"
        const { getByText } = render(<ProductItem asin={"1563118793"} name = {"ford book"}/>)
        axios.get.mockClear()
        axios.get.mockImplementationOnce(() => Promise.resolve({asin, entities:["list of entities"], sentiment:["sentiment object"]}));

        fireEvent.click(getByText('Analyze'))
        wait()

        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(axios.get).toHaveBeenCalledWith(url)
    })
    it('should make an API call to the products/{asin}/analytics endpoint, when the user click on the show result button',async()=>{
        const asin = '1563118793'
        const url = "https://maacaro-analytics-api.herokuapp.com/products/"+asin+"/analytics"
        const { getByText } = render(<ProductItem asin={"1563118793"} name = {"ford book"}/>)
        axios.get.mockClear()
        axios.get.mockImplementationOnce(() => Promise.resolve({asin, entities:["list of entities"], sentiment:["sentiment object"]}));

        fireEvent.click(getByText('Show result'))
        wait()

        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(axios.get).toHaveBeenCalledWith(url)
    })
})