import {createStore,applyMiddleware,combineReducers} from 'redux'

import ShopcarReducer from '../store/reducers/shopcar'
import thunk from 'redux-thunk'


const reducers = combineReducers({
    ShopcarReducer
})
export const store = createStore(reducers,applyMiddleware(thunk))