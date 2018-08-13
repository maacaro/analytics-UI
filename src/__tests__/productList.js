'use strict';

import React from 'react'
import {render, fireEvent, cleanup, wait} from 'react-testing-library'
import 'jest-dom/extend-expect'
import axios from 'axios'
// importimport ProductList from '../product-form/product-List'

xdescribe('ProductList',()=>{
    it('render a list of elements',()=>{
        products = [
            { name:"some name", asin: "some asin" },
            { name:"another name", asin: "anotherr asin"}
        ]
        const {} = rendder(<ProductList product={products}/>)
    
    
    })
})