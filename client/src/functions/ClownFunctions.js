import axios from 'axios'

export const register = newClown => {
    return axios
        .post('/clowns/register', {
            nickname: newClown.nickname,
            firstName: newClown.firstName,
            lastName: newClown.lastName,
            email: newClown.email,
            password: newClown.password
        })
        .then(res => {
            console.log("Registered")
        })
}

export const login = clown => {
    return axios
        .post('/clowns/login', {
            email: clown.email,
            password: clown.password
        })
        .then(res => {
            localStorage.setItem('token', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}