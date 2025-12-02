"use client";

import React, { useState } from "react";
import Image from "next/image";
import { fbImg, GoogleImg, Logo } from "@/components/assetsImport/allAssets";
import SocialButton from "@/components/social/socialButton";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import Spinner from "@/components/loader/spinner";
import axiosInstanceConfig from "@/utils/axios.config";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { ApiResponse } from "@/types/auth";
import { useContext } from "react";
import { useAppSelector } from "@/utils/hooks/hooks";
const SignupContainer: React.FC = () => {
    const { user } = useAppSelector(state => state.auth)
    type CarouselImage = {
        id: number;
        src: string;
        alt: string;
    };
    const images: CarouselImage[] = [
        { id: 1, src: "/slider/sl1.jpg", alt: "CEO Image 1" },
        { id: 2, src: "/slider/sl2.jpg", alt: "CEO Image 2" },
        { id: 3, src: "/slider/sl3.jpg", alt: "CEO Image 3" },
    ];
    const router = useRouter()
    const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [OTP, setOTP] = useState("123456")
    const [phonenumber, setPhonenumber] = useState({ phoneNumber: "", countryCode: "+91" });
    let isClicked = false;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPhonenumber((prevState) => ({
            ...prevState,
            [name]: value.replace(/\D/g, ""),
        }));
    }

    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isClicked) return;
        isClicked = true;

        try {
            if (!phonenumber.phoneNumber) return toast.error("Phonenumber is required")
            setLoading(true)
            const response: AxiosResponse<ApiResponse> = await axiosInstanceConfig.post("/send-otp", { countryCode: phonenumber.countryCode, phoneNumber: phonenumber.phoneNumber });
            console.log("OTP sent response:", response);
            if (response.status === 200) {
                toast.success(response?.data?.message)
                setLoading(false)
                setOtpSent(true);
            }


        } catch (error) {
            console.error("Error sending OTP:", error);
        } finally {
            setLoading(false);
            setTimeout(() => (isClicked = false), 1500);
        }
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isClicked) return;
        isClicked = true;

        try {
            if (!phonenumber.phoneNumber) return toast.error("Phonenumber is required")
            setLoading(true)
            const response: AxiosResponse<ApiResponse> = await axiosInstanceConfig.post("/verify-otp", { phoneNumber: phonenumber.phoneNumber, otp: OTP });
            console.log("OTP verifed response:", response);
            if (response.status === 200) {
                toast.success(response?.data?.message)
                setLoading(false)
                setOtpSent(true);
                router.push("/complete-profile")
                localStorage.setItem("id", response?.data?.body?._id)
                localStorage.setItem("user_details", JSON.stringify(response?.data?.body))
            }


        } catch (error: any) {
            const msg = error?.response?.data?.message
            toast.error(msg)
            console.error("Error sending OTP:", error);
        } finally {
            setLoading(false);
            setTimeout(() => (isClicked = false), 1500);
        }
    };

    return (
        <section className="login-block bg-light p-5">
            <div className="container-fulid">
                <div className="row align-items-center">
                    <div>
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="btn btn-light d-flex align-items-center gap-2"
                            style={{ borderRadius: "0.5rem" }}
                        >
                            <i className="bi bi-arrow-left"></i> {/* Bootstrap icon */}
                            Back
                        </button>
                    </div>



                    {/* --- Left Signup Section --- */}
                    <div className="col-md-4 login-sec bg-white p-4 rounded-4 shadow-sm">
                        <div className="d-flex justify-content-center">
                            <Image alt="logo" src={Logo} className="rounded-circle border"
                                style={{ width: "138px", height: "137px", objectFit: "cover" }} />
                        </div>


                        <form
                            className="signup-form"
                            onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}
                        >


                            <div className="form-group mb-3">
                                <i className="fa fa-phone me-2" style={{ fontSize: "12px" }}></i>
                                <label
                                    htmlFor="mobile"
                                    className="text-uppercase"
                                    style={{ fontFamily: "sans-serif", fontSize: "12px" }}
                                >
                                    Mobile Number
                                </label>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    maxLength={10}
                                    name="phoneNumber"
                                    value={phonenumber.phoneNumber}
                                    onChange={handleChange}
                                    className="form-control mt-1"
                                    id="mobile"
                                    placeholder="Enter your mobile number"
                                />
                            </div>

                            {/* OTP Section */}
                            {otpSent && (
                                <div className="form-group mb-3">
                                    <i
                                        className="fa fa-shield-alt me-2"
                                        style={{ fontSize: "12px" }}
                                    ></i>
                                    <label
                                        htmlFor="otp"
                                        className="text-uppercase"
                                        style={{ fontFamily: "sans-serif", fontSize: "12px" }}
                                    >
                                        Enter OTP
                                    </label>
                                    <input
                                        value={OTP}
                                        onChange={(e) => setOTP(e.target.value)}
                                        type="text"
                                        className="form-control mt-1"
                                        id="otp"
                                        placeholder="Enter OTP"
                                    />
                                </div>
                            )}

                            {otpSent ? <button
                                type="submit"
                                className={`btn ${otpSent ? "btn-success" : "btn-danger"} w-100 mt-3 rounded-pill`} onClick={handleVerifyOtp}
                            >
                                Verify & Sign Up
                            </button> :
                                <button type="submit"
                                    className={`btn ${otpSent ? "btn-success" : "btn-danger"} w-100 mt-3 rounded-pill`} onClick={handleSendOtp} >{loading ? <Spinner /> : "Send OTP"}</button>}
                            <button
                                type="button"
                                className={"btn-danger btn  w-100 mt-3 rounded-pill"}
                            >
                                Cancle
                            </button>
                        </form>

                        {/* Social Login Section */}
                        <div className="strike my-3 text-center position-relative">
                            <span className="bg-white px-3 text-muted small">OR</span>
                        </div>

                        <div className="social-login text-center mb-2">
                            <small className="text-secondary">
                                Continue with your Social Media Account
                            </small>

                        </div>

                        <SocialButton
                            icon={GoogleImg}
                            label="Continue with Google"
                            onClick={() => signIn("google", { callbackUrl: "/" })}
                        />

                        <SocialButton
                            icon={fbImg}
                            label="Continue with Facebook"
                        // onClick={signIn("facebook", { callbackUrl: "/" })}
                        />

                        <div className="social-media-icons d-flex justify-content-center">
                            <ul className="list-unstyled d-flex gap-3">
                                <li>
                                    <i className="fab fa-facebook fa-lg text-primary"></i>
                                </li>
                                <li>
                                    <i className="fab fa-twitter fa-lg text-info"></i>
                                </li>
                                <li>
                                    <i className="fab fa-linkedin-in fa-lg text-primary"></i>
                                </li>
                            </ul>
                        </div>

                        <div className="copy-text text-center mt-4">
                            <small>
                                Already have an Account?{" "}
                                <a href="/login" className="text-danger fw-bold">
                                    Login
                                </a>
                            </small>
                        </div>
                    </div>

                    {/* --- Right Carousel Section --- */}
                    <div className="col-md-8 hide-on-sm banner-sec mt-4 mt-md-0">
                        <div
                            id="infoBoxCarousel"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                {images.map(({ id, src, alt }, index) => (
                                    <div
                                        key={id}
                                        className={`carousel-item${index === 0 ? " active" : ""}`}
                                    >
                                        <div
                                            className="bg-white border border-3 border-light rounded-5 shadow-lg overflow-hidden info-box"
                                            style={{
                                                position: "relative",
                                                width: "100%",
                                                height: "80vh",
                                            }}
                                        >
                                            <Image
                                                src={src}
                                                alt={alt}
                                                fill
                                                style={{
                                                    objectFit: "cover",
                                                    borderRadius: "1.5rem",
                                                }}
                                                priority={index === 0}
                                            />
                                            <div
                                                className="position-absolute top-0 start-0 w-100 h-100"
                                                style={{
                                                    border: "8px solid white",
                                                    borderRadius: "1.5rem",
                                                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.15)",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Responsive height adjustment */}
                        <style jsx>{`
              @media (max-width: 767px) {
                .info-box {
                  height: 200px !important;
                }
              }
            `}</style>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignupContainer;
