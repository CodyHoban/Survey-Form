import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const initialState = {
    input: ""
}

function mreducer(state = initialState, action) {
    switch(action.type) {
        case "MARK":
                this.setState({
                    input: event.target.value
                });
        default:
            return state;
    }
}




const store = createStore(mreducer, composeWithDevTools());
store.dispatch({type: "MARK"})




export default store;