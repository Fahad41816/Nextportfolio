"use server";

import axios from "axios";
import { cookies } from "next/headers";

// Create an Axios instance
const useAxios = axios.create({
  baseURL: "https://nifahadserver.vercel.app//", // Replace with your API base URL
});

// Add a request interceptor to attach the token
useAxios.interceptors.request.use(
  async (config) => {
    const tokenCookie = (await cookies()).get("Token");
    const token = tokenCookie?.value;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.warn("No token found in cookies");
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optionally, add a response interceptor to handle errors
useAxios.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx causes this function to trigger
    return response;
  },
  (error) => {
    // Handle error responses (e.g., token expiration)
    if (error.response?.status === 401) {
      console.error("Unauthorized. Token may be expired or invalid.");
      // Optionally, redirect to login or refresh the token
    }

    return Promise.reject(error);
  }
);

export default useAxios;
