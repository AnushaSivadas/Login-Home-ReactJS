import axios from 'axios';

export const loginUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:4000/login', userData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (userData) => {
    try {
        const response = await axios.post('http://localhost:4000/signup', userData, {
      withCredentials: true,
    });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const googleSigninUser = async (credential) => {
    try {
        const response = await axios.post('http://localhost:4000/googleSignin', credential, {
      withCredentials: true,
    });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const verifyUserSession = async () => {
    try {
      const response = await axios.post('http://localhost:4000', {}, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

