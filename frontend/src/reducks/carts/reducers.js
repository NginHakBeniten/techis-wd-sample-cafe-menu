import * as Actions from './actions'
import  initialState from '../store/initialState'

export const CartsReducer = (state = initialState.carts, action) => {
    switch(action.type) {
        case Actions.ADD_CART:
            return {
                ...state,
                list: action.payload
            }
        case Actions.INCREASE_CART:
            return {
                ...state,
                list: action.payload
            }
        case Actions.DECREASE_CART:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}