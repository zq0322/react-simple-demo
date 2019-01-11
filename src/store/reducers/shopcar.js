const defaultState = {
    shopcarList:[]
}

const ShopcarReducer = (state = defaultState,action) =>{
    const {type,payload} = action

    switch (type) {
        case "UPDATE":
            return {...state,shopcarList : [...payload]}
        case "PLUS":
            return {...state,shopcarList : [...payload]}
        case "MINUS":
            return {...state,shopcarList : [...payload]}
        case "CHECH_ITEM":
            return {...state,shopcarList : [...payload]}
        default:
            return state;
    }
}
export default ShopcarReducer