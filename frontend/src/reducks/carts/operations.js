import API from "../../API"
import {addCartAction, increaseCartAction, decreaseCartAction} from "./actions";

const api = new API();

export const addCart = (item) => {
    return async (dispatch, getState) => {
        let prevCarts = getState().carts.list
        prevCarts[item.id] = {item: item, selected_count: 1};
        console.log("test2");
        console.log(prevCarts);
        dispatch(addCartAction(prevCarts))
   }
}
export const increaseCart = (item) => {
    return async (dispatch, getState) => {
        let prevCarts = getState().carts.list
        let nextSelectedCount = prevCarts[item.id].selected_count + 1;
        prevCarts[item.id] = {"item": item, "selected_count": nextSelectedCount};
        dispatch(increaseCartAction(prevCarts))
   }
}

export const decreaseCart = (item) => {
    return async (dispatch, getState) => {
        let prevCarts = getState().carts.list
        let nextSelectedCount = prevCarts[item.id].selected_count - 1;
        if (nextSelectedCount > 0) {
            prevCarts[item.id] = {"item": item, "selected_count": nextSelectedCount};
        } else {
            delete prevCarts[item.id];
        }
        dispatch(decreaseCartAction(prevCarts))
   }
}

