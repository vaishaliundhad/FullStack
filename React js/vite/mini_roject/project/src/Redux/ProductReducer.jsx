import React from 'react';
import { product_set } from './Constant'

const ProductReducer = (state=[], action) => {
    switch (action.type) {
        case product_set: return {

        }
        default: return state;
    }
}

export default ProductReducer
