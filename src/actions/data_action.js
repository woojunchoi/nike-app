//import axios for fetching data from external json file
import axios from 'axios'

//action types
export const SAVE_DATA = 'SAVE_DATA'
export const ADD_CART ='ADD_CART'
export const CHANGE_BORDER ='CHANGE_BORDER'
export const CHANGE_VIEW ='CHANGE_VIEW'
export const DELETE_ITEM ='DELETE_ITEM'

//actions
export const receiveData = (data) => {
    return {
    type:SAVE_DATA,
    data
    }
}

export const changeView = () => {
    return {
    type:CHANGE_VIEW
    }
}

export const addCart = (index) => {
    return {
        type:ADD_CART,
        index
    }
}
export const changeBorder = (index) => {
    return {
        type:CHANGE_BORDER,
        index
    }
}

export const deleteItem = (index) => {
    return {
        type:DELETE_ITEM,
        index
    }
}

//axios returns promise
export const fetchData = () => {
    return (dispatch) => {
        return axios.get('/data.json')
        .then((response) => dispatch(receiveData(response.data.products)))
    }
}