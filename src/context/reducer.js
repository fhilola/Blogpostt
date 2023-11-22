import instance from "../services/api"

export const initialState = {
    info: {
        user_id: localStorage.getItem('user_id') || null,
        is_loggedin: localStorage.getItem('is_loggedin') || false,
        token: localStorage.getItem('token') || '',
        userData: {}
    },
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('token', action.userdata.token)
            localStorage.setItem('user_id', action.userdata.user._id)
            localStorage.setItem('is_loggedin', true)
            localStorage.setItem('userData', JSON.stringify(action.userdata.user))
            return {
                info: {
                    user_id: action.userdata.user._id,
                    is_loggedin: true,
                    token: action.userdata.token,
                    userData: action.userdata.user
                },
            }
        case 'DELETE':
            instance.delete(`api/posts/${action.id}`)
                .then(res => {
                    return res
                })

        case 'EDIT':
            instance.put(`api/posts/${action.id}`, )

        default:
            return state
    }
}
export default reducer