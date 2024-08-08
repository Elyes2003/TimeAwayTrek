import { createContext, useReducer } from "react";

export const LeavesContext = createContext()

export const leavesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LEAVES':
            return {
                leaves: action.payload
            };
        case 'CREATE_LEAVE':
            return {
                leaves: [action.payload, ...state.leaves]
            };
        case 'DELETE_LEAVE':
            return{
                leaves: state.leaves.filter((leave)=> leave._id !== action.payload._id)
            };
        case 'UPDATE_LEAVE':
            return {
                leaves: state.leaves.map((leave)=> leave._id === action.payload._id ? action.payload : leave)
            }
        default:
            return state;
    }
}

export const LeavesContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(leavesReducer, {
        leaves: null
    });

    return (
        <LeavesContext.Provider value={{...state, dispatch}}>
            {children}
        </LeavesContext.Provider>
    )
}
