export const initialState = {
    info: {
        user_id: null,
        is_loggedin: false,
        token: localStorage.getItem('token') || ''
    }
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('token', action.userdata.token)
            return {
                info: {
                    user_id: action.userdata.user._id,
                    is_loggedin: true,
                    token: action.userdata.token
                }
            }
            return;
        default:
            return state
    }
}
export default reducer