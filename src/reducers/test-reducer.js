const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const counter = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1

        case "DECREMENT":
            return state - 1;

        default:
            return state;
    }
}
    
const store = createStore(counter)
console.log(store.getState())
module.exports = counter