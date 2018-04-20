import * as actions from '../actions/data_action'

const initialState = {
    data: [],
    addedItems: [],
    showShoes: [],
    searchCache: {}
}

const data_reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SAVE_DATA:
            return Object.assign({}, state, {
                data: action.data
            })
        case actions.ADD_CART:
            let cart = state.addedItems.slice()
            cart.push(state.data[action.index])
            console.log(action.index)
            return Object.assign({}, state, {
                addedItems: cart,
            })
        case actions.SEARCH_SHOES:
            // start with base case so list of all breeds is returned if search value is blank.
            let filtered = state.data.slice();
            const valueReg = new RegExp(action.value.toLowerCase());
            console.log(valueReg)
            if (action.value.trim() !== '') {
                // Find in or store to cache of previous search results
                if (state.searchCache[action.value]) filtered = state.searchCache[action.value];
                else {
                    filtered = state.data.filter(el => el.name.toLowerCase().match(valueReg));
                    state.searchCache[action.value] = filtered;
                }
            }
            return Object.assign({}, state, {
                showShoes: filtered
            })
        //     case data_actions.CHANGE_BORDER:
        //         return Object.assign({}, state, {
        //         currentItem:action.index
        //         })
        //     case data_actions.CHANGE_VIEW: 
        //         return Object.assign({}, state, {
        //             cartPage:!state.cartPage
        //             })
            case actions.DELETE_ITEM:
                let addeditem = state.addedItems.slice()
                addeditem.splice(action.index, 1)
                return Object.assign({},state, {
                    addedItems:addeditem
                    })
        default:
            return state;
    }
}

export default data_reducer