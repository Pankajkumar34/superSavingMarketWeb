import { toast } from "react-toastify";
import axiosInstanceConfig from "../axios.config";
export const getMe = async () => {
    try {
        const res = await axiosInstanceConfig.get("/auth/me");
       
        return res.data;

    } catch (err: any) {
        if (err.response?.status === 401) {
            try {
                const refreshed = await axiosInstanceConfig.post("/auth/refresh-token");

                if (refreshed?.data?.success) {
                    const retry = await axiosInstanceConfig.get("/auth/me");
                    return retry.data;
                }
            } catch (refreshError) {
                console.log(refreshError, "referror")
                // toast.error("Your session has expired. Please login again.");

                // Redirect to login
                // router.push("/login");
                return { loggedIn: false, expired: true };
            }
        }

        return { loggedIn: false, user: null };
    }
};
