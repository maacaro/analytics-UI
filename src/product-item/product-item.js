import React from 'react';

export default class ProductItem extends React.Component{
    render(){
        const { asin , name } = this.props
        return(
            <div>
                <label>{asin} {name}</label>
                <button>Crawl</button>
                <button>Analyze</button>
                <button>Show result</button>
            </div>
        )
    }
}