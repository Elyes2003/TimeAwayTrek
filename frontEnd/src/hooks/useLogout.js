import { useAuthContext } from "./useAuthContext"
import { useLeavesContext } from "./useLeavesContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: leavesDispatch }  = useLeavesContext()


    const logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('isAdmin')

        dispatch({type: 'LOGOUT'});
        leavesDispatch({type: 'SET_LEAVES', payload: null})
    }
    return {logout}
}