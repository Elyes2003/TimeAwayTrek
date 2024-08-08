//make api requests
import axios from "axios";

axios.defaults.baseURL ='http://localhost:3000';

//get all users
export async function getAllUser(){
    try {
        const { data } = await axios.get(`/api/getAllUsers`);
        return {data}
    } catch (error) {
        return {error:"cannot find users data!" }
    }
}
//get user
export async function getUser(email){
    try {
        const { data } = await axios.get(`/api/user/${email}`);
        return {data}
    } catch (error) {
        return {error:"cannot find user data!" }
    }
}
//register user
export async function registerUser(credentials){
    try {
        const {data: {msg} } = await axios.post(`/api/register`,credentials);

        return Promise.resolve(msg);
    } catch (error) {
       // return Promise.reject({error})//return all body of error (message ,responce,status)
        return Promise.reject({ error: error.response.data.error });

    }
}

//login user
export async function loginUser({ email, password }) {
    try {
      const { data } = await axios.post(`/api/login`, { email, password });
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject({ error: "Wrong email or password!" });
      //return Promise.reject({ error: error.response.data.error });
    }
  }
  

//update user
export async function updateUser(response){
    try {
        const token = await localStorage.getItem('token');
        const data = await axios.put('/api/updateUser', response, {headers: {"Authorization":`Bearer ${token}`}});
        
        return Promise.resolve({ data });
    } catch (error) {
        return Promise.reject({error: "couldn't update user!"})

    }
}

export async function updateNbDays(userId, newNbDays) {
    try {
        const token = localStorage.getItem('token'); // Assuming localStorage is properly set

        // Make the PUT request to update nb_days
        const data = await axios.put(
            '/api/updateUserSolde',
            { nb_days: newNbDays, userId: userId },
            { headers: { "Authorization": `Bearer ${token}` } }
        );

        // Return the response data
        return Promise.resolve({ data });
    } catch (error) {
        return Promise.reject(error.response.data)
    }
}

