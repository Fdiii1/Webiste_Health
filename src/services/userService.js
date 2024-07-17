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
const deleteUserSerice =(userId) =>{
    return axios.delete('/api/delete-users',{
        data: {
            id: userId
        }
    })
}
const editUserService = (inputData) => {
    return axios.put('/api/edit-users', inputData)
}
const getAllCodeService = (inputType )=>{
    return axios.get(`/api/allcode?type=${inputType} `)

}
export {
    handleLoginApi,getAllUsers,createNewUserSerice,
    deleteUserSerice,editUserService,getAllCodeService
}

