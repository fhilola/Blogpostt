export const initialState = {
    info: null
}
const reducer = (state, action) =>{
    if(action.type === "LOGIN"){
        localStorage.setItem("access_token", action.data.data.token)
        return {
            info : action.data
        }
    }
}
export default reducer