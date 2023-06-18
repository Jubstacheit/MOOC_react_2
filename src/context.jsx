import {createContext, useReducer} from "react";

const initialState = {
    theme: 'light'
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'switchTheme':
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            }
        default:
            throw Error('Unknown action in context reducer')
    }
}

const Context = createContext({context: initialState, dispatch: () => {}})

const ContextProvider = ({children}) => {
    const [context, dispatch] = useReducer(reducer, initialState)
    return (
        <Context.Provider value={{context, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}