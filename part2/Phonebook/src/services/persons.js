import axios from 'axios'

const sURL = 'http://localhost:3001/persons'

const get = () => {
    const request = axios.get(sURL)
    return request.then(response => response.data)
}

const upload = (newContact) => {
    const request = axios.post(sURL, newContact)
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(sURL + "/" + id)
    return request.then(response => response.data)
}

const put = (props) => {
    const request = axios.put(sURL + "/" + props.id, {name: props.name, number: props.number})
    return request.then(response => response.data)
}

export default {get, upload, remove, put}