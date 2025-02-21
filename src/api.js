import axios from "axios";

const API_BASE_URL = "https://onestopd-golang-rohapis-3.onrender.com/api"; // Backend URL

export const getOrders = async () => {
    return await axios.get(`${API_BASE_URL}/orders`);
};

export const addOrder = async (order) => {
    return await axios.post(`${API_BASE_URL}/orders`, order);
};

export const getItem = async (id) => {
    return await axios.get(`${API_BASE_URL}/get/${id}`);
};

export const addItem = async (item) => {
    return await axios.post(`${API_BASE_URL}/insert`, item);
};