import React from 'react';
import axios from 'axios';
import qs from 'qs';
import { Link } from 'react-router-dom'

export default class ProductItem extends React.Component{
    handleOnClickResults = async () => {
        const url = "https://maacaro-analytics-api.herokuapp.com/products/"+this.props.asin+"/analytics"
        const analytics = await axios.get(url);
    }

    handleOnClickAnalyze= async () => {
        const url = "https://maacaro-analytics-api.herokuapp.com/products/"+this.props.asin+"/reviews/analyze"
        const analytics = await axios.get(url);
    }

    handleOnClickCrawl = () =>{
        const url = "https://app.scrapinghub.com/api/run.json"
        const headers = {
            'content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic OTczZDlkOWFhN2NiNDkwMGFjYjU4M2IzYmQyOGQ4MDc6T1RjelpEbGtPV0ZoTjJOaU5Ea3dNR0ZqWWpVNE0ySXpZbVF5T0dRNE1EYzY='
        }
        const data = {
            project: '320403',
            spider: 'amazon-reviews-spider',
            asin: `${this.props.asin}`

        }
        axios.post(url,qs.stringify(data),{ headers })
    }
    render(){
        const { asin , name } = this.props
        return(
            <div className="flex-container">
                <div>
                    <label>{name} ({asin})</label>
                </div>
                <div>
                    <button onClick={this.handleOnClickCrawl}>Crawl</button>
                    <button onClick={this.handleOnClickAnalyze}>Analyze</button>
                    <button onClick={this.handleOnClickResults}>Show result</button>
                    <Link to={`/dashboard/${asin}`}>Dashboard</Link>
                </div>
            </div>
        )
    }
}