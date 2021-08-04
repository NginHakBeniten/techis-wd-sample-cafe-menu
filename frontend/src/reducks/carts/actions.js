export const ADD_CART = "ADD_CART";
export const addCartAction = (carts) => {
    return {
        type: "ADD_CART",
        payload: carts
    }
}
export const INCREASE_CART = "INCREASE_CART";
export const increaseCartAction = (carts) => {
    return {
        type: "INCREASE_CART",
        payload: carts
    }
}
export const DECREASE_CART = "DECREASE_CART";
export const decreaseCartAction = (carts) => {
    return {
        type: "DECREASE_CART",
        payload: carts
    }
}
