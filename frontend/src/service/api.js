import axios from 'axios';

const url = '';

export const createPost = async (post) => {
    try {
        return await axios.post(`${url}/create`, post);
    } catch (error) {
        console.log('Error while calling createPost API ', error);
    }
};

export const createContact = async (contact) => {
    try {
        console.log(contact);
        return await axios.post(`${url}/contact/createcontact`, contact);
    } catch (error) {
        console.log('Error while calling createPost API ', error);
    }
};

export const getAllPosts = async (params) => {
    try {
        let response = await axios.get(`${url}/posts${params}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getPosts API ', error)
    }
}

export const getPost = async (id) => {
    try {
        let response = await axios.get(`${url}/posts/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getPosts API ', error)
    }
}

export const updatePost = async(id,post) => {
    try {
        await axios.post(`${url}/update/${id}`,post); 
    } catch (error) {
        console.log('Error while calling the updatePost API ',error)
    }
}

export const deletePost = async(id) => {
    try {
        await axios.delete(`${url}/delete/${id}`); 
    } catch (error) {
        console.log('Error while calling the deletePost API ',error)
    }
}

export const uploadFile = async (data) => {
    console.log(data);
    try {
        return await axios.post(`${url}/file/upload`, data);
    } catch (error) {
        console.log('Error while calling uploadFile API ', error);
    }
}