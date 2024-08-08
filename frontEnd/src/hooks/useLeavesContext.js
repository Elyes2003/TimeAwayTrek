import { LeavesContext } from "../context/leavesContext"; 
import { useContext } from "react";

export const useLeavesContext = () => {
    const context = useContext(LeavesContext)

    if(!context){
        throw Error('useLeavesContext must ne used inside an leavesContextProvider')
    }

    return context
}