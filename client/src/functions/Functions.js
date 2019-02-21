import axios from 'axios'

export const getAllClowns = () => {
    return axios.get('/clowns/all');
}

export const getClown = (clownId) => {
    return axios.get('/clowns/'+clownId);
}