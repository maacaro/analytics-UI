import React from 'react';
import axios from 'axios';

export default class ProductItem extends React.Component{
    handleOnClick = () =>{
        const url = "https://app.scrapinghub.com/api/run.json"
        const headers = {
            "authorization": "Basic OTczZDlkOWFhN2NiNDkwMGFjYjU4M2IzYmQyOGQ4MDc6T1RjelpEbGtPV0ZoTjJOaU5Ea3dNR0ZqWWpVNE0ySXpZbVF5T0dRNE1EYzY=",
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
        }
        const data = {
            "project": "320403",
            "spider": "amazon-reviews-spider",
            "asin": `${this.props.asin}`

        }
        axios.post(url,data,headers)
    }
    render(){
        const { asin , name } = this.props
        return(
            <div>
                <label>{asin} {name}</label>
                <button onClick={this.handleOnClick}>Crawl</button>
                <button>Analyze</button>
                <button>Show result</button>
            </div>
        )
    }
}