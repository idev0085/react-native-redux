import {combineReducers } from 'redux'
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import cartitems from './cartitems';

export default combineReducers({
    todos,
    cartitems
})

