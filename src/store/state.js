import React, { createContext, useReducer } from "react";

import Reducer from './reducer'

const initialState = { nominations: [], nominationsComplete: false };
export const Context = createContext(initialState);
const { Provider } = Context;

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    state.nominationsComplete = state.nominations.length >= 5
    return (
        <Provider value={{ state, dispatch }}>
            {children}
        </Provider>
    )
};

export default Store;