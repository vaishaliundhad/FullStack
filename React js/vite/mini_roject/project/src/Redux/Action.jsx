import {add_to_cart,  remove_to_cart, empty_cart, cart_to_whishlist,add_to_whishlist,remove_to_whishlist,empty_whishlist, whishlist_to_cart } from "./Constant";

export const add_to_cart=()=>{
    return{
        type:add_to_cart

    }
}

export const remove_to_cart=()=>{
    return{
        type:remove_to_cart
    }
}

export const empty_cart=()=>{
    return{
        type:empty_cart
    }
}

export const cart_to_whishlist =()=>{
    return{
        type:cart_to_whishlist
    }
}
export const add_to_whishlist=()=>{
    return{
        type:add_to_whishlist

    }
}

export const remove_to_whishlist=()=>{
    return{
        type:remove_to_whishlist
    }
}

export const empty_whishlist=()=>{
    return{
        type:empty_whishlist
    }
}

export const whishlist_to_cart =()=>{
    return{
        type:cart_to_whishlist
    }
}