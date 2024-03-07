
//SAGA

// ou can refactor your asynchronous API calls using Redux Saga. Redux Saga is particularly useful for managing side effects, such as asynchronous operations like API calls, in a more centralized and organized way.


// This example assumes that you have Redux Saga middleware set up in your Redux store, and you'll need to run watchProjectSagas in your application to start listening for the corresponding actions. This setup provides a more centralized way to manage the asynchronous operations associated with your project-related actions.



import axios from "../../../utils/axios";

export const getProjects = async () => {
    const response = await axios.get('api/');
    return response.data;
}

export const getProjectDetail = async (id) => {
    const response = await axios.get(`api/${id}`);
    return response.data;
}

export const addProject = async (data) => {
    const response = await axios.post('api/', data);
    return response.data;
}

export const updateProject = async ({id, data}) => {
    const response = await axios.put(`api/${id}/`, data);
    return response.data;
}

export const deleteProject = async (id) => {
    const response = await axios.delete(`api/${id}`);
    return response.data;
}


