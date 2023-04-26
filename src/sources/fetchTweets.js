import axios from 'axios';

axios.defaults.baseURL = 'https://64464d02ee791e1e29fb571d.mockapi.io';

export async function fetchTweets(page) {
  try {
    const response = await axios.get(`/users?page=${page}&limit=3`);
    return response.data;
  } catch (error) {
    return error.message;
  }
}

export async function addFollowers(id, countFollowers) {
  try {
    const response = await axios.put(`/users/${id}`, {
      followers: countFollowers,
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
}
