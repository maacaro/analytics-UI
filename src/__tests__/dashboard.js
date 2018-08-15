'use strict';

import React from 'react'
import {render, fireEvent, cleanup, wait} from 'react-testing-library'
import 'jest-dom/extend-expect'
import axios from 'axios'
import Dashboard from '../dashboard/dashboard'

describe('Dashboard',()=>{
    it('should call the analytics endpointfrom the analytics API',async ()=>{
        const { getByText } = render(<Dashboard/>)

        wait()

        expect(axios.get).toHaveBeenCalledTimes(1)
    })
})

