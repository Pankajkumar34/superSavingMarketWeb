"use client";

import React, { useState } from "react";
import Image from "next/image";
import { fbImg, GoogleImg, Logo } from "@/components/assetsImport/allAssets";
import SocialButton from "@/components/social/socialButton";
import { signIn } from "next-auth/react";

const SignupContainer: React.FC = () => {
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

    const [otpSent, setOtpSent] = useState(false);

    const handleSendOtp = (e: React.FormEvent) => {
        e.preventDefault();
        setOtpSent(true);
    };

    const handleVerifyOtp = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Signup successful (mock)!");
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
                            {/* <div className="form-group mb-3">
                <i className="fa fa-user me-2" style={{ fontSize: "12px" }}></i>
                <label
                  htmlFor="username"
                  className="text-uppercase"
                  style={{ fontFamily: "sans-serif", fontSize: "12px" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control mt-1"
                  id="username"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group mb-3">
                <i className="fa fa-envelope me-2" style={{ fontSize: "12px" }}></i>
                <label
                  htmlFor="email"
                  className="text-uppercase"
                  style={{ fontFamily: "sans-serif", fontSize: "12px" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control mt-1"
                  id="email"
                  placeholder="Enter your email"
                />
              </div> */}

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
                                    type="tel"
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
                                        type="text"
                                        className="form-control mt-1"
                                        id="otp"
                                        placeholder="Enter OTP"
                                    />
                                </div>
                            )}

                            <button
                                type="submit"
                                className={`btn ${otpSent ? "btn-success" : "btn-danger"
                                    } w-100 mt-3 rounded-pill`}
                            >
                                {otpSent ? "Verify & Sign Up" : "Send OTP"}
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
                            onClick={()=>signIn("google", { callbackUrl: "/" })}
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
