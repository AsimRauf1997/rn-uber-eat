import { createStore } from "redux";
import reducer from './reducers/index'
export default function configureStore(intialState){
    const store = createStore(reducer, intialState)
    return store;
}