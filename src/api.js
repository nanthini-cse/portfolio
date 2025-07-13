import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000/api' });

export const fetchProjects = () => API.get('/projects');
export const sendMessage = (formData) => API.post('/contact', formData);
