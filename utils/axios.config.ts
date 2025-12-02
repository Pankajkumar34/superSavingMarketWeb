import React from "react";
import axios from "axios";

// const axiosInstanceConfig = () => {
//     const instance = axios.create({
//         baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000/api/auth",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         withCredentials:true

//     })
//     return instance
// }


const axiosInstanceConfig = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000/api/auth",
    withCredentials: true, // send cookies
});

// refresh request running flag
let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach((promise) => {
        if (error) {
            promise.reject(error);
        } else {
            promise.resolve(token);
        }
    });

    failedQueue = [];
};

// RESPONSE INTERCEPTOR
axiosInstanceConfig.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Access token expired
        if (error.response?.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise(function (resolve, reject) {
                    failedQueue.push({ resolve, reject });
                })
                .then((token) => {
                    originalRequest.headers["Authorization"] = `Bearer ${token}`;
                    return axiosInstanceConfig(originalRequest);
                })
                .catch((err) => Promise.reject(err));
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const res = await axiosInstanceConfig.post("/refresh-token");

                isRefreshing = false;
                processQueue(null, res.data.accessToken);

                // Retry original request with new token
                originalRequest.headers["Authorization"] = `Bearer ${res.data.accessToken}`;
                return axiosInstanceConfig(originalRequest);

            } catch (refreshError) {
                isRefreshing = false;
                processQueue(refreshError, null);
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);



export default axiosInstanceConfig;