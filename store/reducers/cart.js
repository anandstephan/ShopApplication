import CartItem from "../../models/cart-item";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import {ADD_ORDER} from '../actions/orders'
import { DELETE_PRODUCT } from "../actions/product";
const initialState ={
    items:{},
    totalAmount:0
}

export default (state=initialState,action) =>{
    switch(action.type){
        case ADD_TO_CART:
            const addedProduct = action.product
            const prodPrice = addedProduct.price
            const prodTitle = addedProduct.title
            let cartItem;
            if(state?.items[addedProduct.id]){
                cartItem = new CartItem(state.items[addedProduct.id].quantity+1,prodPrice,prodTitle,state.items[addedProduct.id].sum + prodPrice)
            }else{
                cartItem = new CartItem(1,prodPrice,prodTitle,prodPrice)
            }
            return {
                ...state,
                items:{...state.items,[addedProduct.id]:cartItem},
                totalAmount:state.totalAmount+prodPrice
            }
        case REMOVE_FROM_CART:
        const selectedCartitem = state.items[action.pid]     
        const currentQty = selectedCartitem.quantity
            let updatedCartItems;
            if(currentQty>1){
                const updatedCartItem = new CartItem(selectedCartitem.quantity-1,selectedCartitem.productPrice,selectedCartitem.productTitle,selectedCartitem.sum-selectedCartitem.productPrice)
                updatedCartItems = {...state.items,[action.pid]:updatedCartItem}
            }else{
                 updatedCartItems = {...state.items}
                delete updatedCartItems[action.pid]
            }
            return {
                ...state,
                items:updatedCartItems,
                totalAmount:state.totalAmount - selectedCartitem.productPrice
            }
        case ADD_ORDER:
            return initialState
        case DELETE_PRODUCT:
        if(!state.items[action.pid]){
            return state;
        }
        const updatedItems = {...state.items}
        const itemTotal = state.items[action.pid].sum
        delete updatedItems[action.pid]
            return {
                ...state,
                items:updatedItems,
                totalAmount:state.totalAmount - itemTotal
            }
    }
    return state;
}