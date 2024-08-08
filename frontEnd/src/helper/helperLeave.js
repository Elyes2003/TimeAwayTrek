import axios from "axios";
axios.defaults.baseURL ='http://localhost:3000';


export const getAllLeaves = async (token) => {
    try {
        const { data } = await axios.get('/api/leaves/admin', {
            headers: {
                "Authorization":`Bearer ${token}`
            }})
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject({error: "couldn't find leaves"})

    }
}
export const getLeaves = async (token) => {
    try {
        const { data } = await axios.get('/api/leaves', {
            headers: {
                "Authorization":`Bearer ${token}`
            }})
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject({error: "couldn't find leaves"})

    }
}

export const createLeave = async (form,token) => {
    try {
        const  { data }  = await axios.post(`/api/leaves`,form, {
            headers: {
                "Authorization":`Bearer ${token}`
            }});
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject({error: "couldn't create leave request"})

    }
}

export const deleteLeave = async (id,token) => {
    try {
        const {data}  = await axios.delete(`api/leaves/${id}`, {
            headers: {
                "Authorization":`Bearer ${token}`
            }});
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject({error: "couldn't delete leave request"})
    }
}

export const updateLeave = async(id,form,token) => {
    try {
        const {data}  = await axios.patch(`api/leaves/${id}`,form, {
            headers: {
                "Authorization":`Bearer ${token}`
            }});        
        return Promise.resolve(data);

    } catch (error) {
        return Promise.reject({error: "couldn't update leave request"})

    }
}