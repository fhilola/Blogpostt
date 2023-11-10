import { useContext, createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

const AppContext = createContext()

const AppProvider = ({children}) =>{
    return(
        <AppContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider
export const useValue = () => useContext(AppContext)