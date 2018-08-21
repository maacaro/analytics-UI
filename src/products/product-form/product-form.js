import React, {Component} from 'react';

export default class ProductForm extends Component {
    render(){
        const { onSubmit } = this.props
        return(
            <div className="container">
                <form onSubmit={onSubmit}>
                    <div className = "row">
                        <div className="col-35"><label htmlFor="asin">Product asin:</label></div> 
                        <div  className="col-65"><input type="text" name="asin" id="asin"/></div>
                    </div>
                    <div className= "row">
                        <div className="col-35"><label htmlFor="productName">Product Name:</label></div> 
                        <div  className="col-65"><input type="text" name="productName" id="productName"/></div> 
                    </div>
                    <div className ="submitHolder">
                        <button type="submit" className={"submit"}>Add Product</button>
                    </div>
                </form>
        </div>
        )
    }
}