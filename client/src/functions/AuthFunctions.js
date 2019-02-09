import jwt_decode from 'jwt-decode'

export const requireAuth = () => {
    if(!localStorage.getItem('token')) {
        let data = {
            res: false
        }
        return data
    }
    let token = localStorage.token
    let decoded = jwt_decode(token)
    let data = {
        res: true,
        user: decoded
    }
    return data
}