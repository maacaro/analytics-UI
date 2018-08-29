import React, {Component} from 'react';

export default class ProductForm extends Component {
    render(){
        const { onSubmit } = this.props
        return(
                <form onSubmit={onSubmit}>
                    <div>
                        <input type="text" name="asin" id="asin" placeholder = "Asin"/>
                        <button type="submit" className={"button"}>Add</button>
                    </div>
                </form>
        )
    }
}