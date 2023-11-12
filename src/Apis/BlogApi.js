import axios from 'axios';

// const API = axios.create({ baseURL: 'https://blog-backend-7kvy.onrender.com' });
const API = axios.create({ baseURL: 'http://localhost:5000/' });

// export const getProductsByType = (type) => API.get(`/product/products/${type}`);
export const getBlogs = () => API.get('/');
export const getBlog = (id) => API.get(`/${id}`);
export const updateBlog = (id,formData) => API.put(`/${id}`,formData);
export const createBlog = (formData) => API.post('/', formData);
export const pushComment = (formData) => API.put('/comment', formData);
export const getComments = (formData) => API.get('/comment');
export const toggleLike = (formData) => API.put('/toggleLike',formData); // formData = {blogId,userId}
