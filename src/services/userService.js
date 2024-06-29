import axios from '../axios';



const  handleLoginApi = (userEmail,userPassword) =>{

    return axios.post('/api/login' , { email: userEmail, password: userPassword });
}
const getAllUsers = (inputId) =>{
    return axios.get(`/api/get-all-users?id=${inputId} `)
}
const createNewUserSerice = (data) =>{
    console.log('check data from service' ,data)
    return axios.post('/api/creat-new-users',data)
}
export {handleLoginApi,getAllUsers,createNewUserSerice}

