import axios from 'axios';

const axiosClient = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
})


class APIClient{
    constructor(endpoint){
        this.endpoint = endpoint;
    }

    getTodos = ()=>{
        return axiosClient.get(this.endpoint).then(res=>res.data)
    }
    addTodo = (todo)=>{
        return axiosClient.post(this.endpoint, todo).then(res=>res.data);
    }
}

export default APIClient;