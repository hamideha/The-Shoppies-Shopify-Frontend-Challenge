import { createContext, useReducer, useEffect } from "react";

import Reducer from './reducer'

const initialState = { nominations: [], nominationsComplete: false };
const localState = JSON.parse(localStorage.getItem("nominationData"));

export const Context = createContext(initialState);
const { Provider } = Context;

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, localState || initialState);
    useEffect(() => {
        localStorage.setItem("nominationData", JSON.stringify(state));
    }, [state]);

    state.nominationsComplete = state.nominations.length >= 5
    return (
        <Provider value={{ state, dispatch }}>
            {children}
        </Provider>
    )
};

export default Store;