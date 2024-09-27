import { createStore } from 'redux';
// const redux = require('redux')

const INITIAL_VALUE = {
    counter: 0
}

// Create a reducer
const reducer = (store = INITIAL_VALUE, action) => {
    let newStore = store
    if (action.type === 'INCREMENT') {
        newStore = {counter: store.counter + 1}
    } else if (action.type === 'DECREMENT') {
        newStore = {counter: store.counter - 1}
    } else if (action.type === 'ADDITION') {
        newStore = {counter: store.counter + action.payload.num}
    } else if (action.type === 'SUBTRACTION') {
        newStore = {counter: store.counter - action.payload.num}
    } 
    return newStore
}

// Create the Redux store
// const store = redux.createStore(reducer)
const store = createStore(reducer)

// create a subscriber
const subscriber = () => {
    const state = store.getState()
    console.log(state)
}

store.subscribe(subscriber)

// calling or dispatching the store
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})
store.dispatch({type: 'ADDITION', payload: {num: 7}})
store.dispatch({type: 'SUBTRACTION', payload: {num: 10}})
store.dispatch({type: 'ADDITION', payload: {num: 7}})
store.dispatch({type: 'INCREMENT'})