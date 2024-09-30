import { createStore } from "redux";

const INITIAL_VALUE = {counter: 0}

const reducer = (store = INITIAL_VALUE, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {counter: store.counter + 1}
        case 'DECREMENT':
            return {counter: store.counter - 1}
        case 'ADDITION':
            return {counter: store.counter + Number(action.payload.num)}
        case 'SUBSTRACTION':
            return {counter: store.counter - Number(action.payload.num)}
    }
    return store
}
const store = createStore(reducer)

export default store;