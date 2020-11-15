
const { createStore } = require('redux');

const initialState = {
    age: 22
};

const myReducer = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        case "ADD": return {
            age: newState.age += 1
        };
        case "SUBSTARCT": return {
            age: newState.age -= 2
        };
        default: return newState;
    }
};

const store = createStore(myReducer);

store.subscribe(() => {console.log('this is the new state'+JSON.stringify(store.getState()))});
   
store.dispatch({type:"ADD"});
store.dispatch({type:"ADD"});
store.dispatch({type:"ADD"});
store.dispatch({type:"SUBSTARCT"});




