"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fbImg, GoogleImg, Logo } from "@/components/assetsImport/allAssets";
import SocialButton from "@/components/social/socialButton";
import { signIn } from "next-auth/react";

const SigninModal: React.FC = () => {
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


    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Check sessionStorage if user has closed modal before
        const hasSeenModal = sessionStorage.getItem("loginModalSeen");
        if (!hasSeenModal) {
            setShowModal(true);
        }
    }, []);

    const handleClose = () => {
        setShowModal(false);
        sessionStorage.setItem("loginModalSeen", "true"); // store that user has closed it
    };

    if (!showModal) return null;
    return (
        <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content relative">
                    <div className="modal-header border-0">
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={handleClose}
                        ></button>
                    </div>
                    <div className="modal-body p-0">
                        {/* --- Your Login Section --- */}
                        <div className="login-block bg-light p-5 " style={{ borderRadius: "10px" }}>
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-md-12 login-sec bg-white p-4 rounded-4 shadow-sm">
                                        <div className="d-flex justify-content-center mb-3">
                                            <Image
                                                alt="logo"
                                                src={Logo}
                                                className="rounded-circle border"
                                                style={{
                                                    width: "138px",
                                                    height: "137px",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>
                                        <form className="login-form">
                                            {/* Username */}
                                            <div className="form-group mb-3">
                                                <label className="text-uppercase" style={{ fontSize: "12px" }}>
                                                    Username
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control mt-1"
                                                    placeholder="Enter your username"
                                                />
                                            </div>

                                            {/* Password */}
                                            <div className="form-group mb-3">
                                                <label className="text-uppercase" style={{ fontSize: "12px" }}>
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control mt-1"
                                                    placeholder="Enter your password"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn btn-danger w-100 mt-3 rounded-pill"
                                            >
                                                Login
                                            </button>

                                            <div className="strike my-3 text-center position-relative">
                                                <span className="bg-white px-3 text-muted small">OR</span>
                                            </div>

                                            {/* Social login */}
                                            <SocialButton
                                                icon={GoogleImg}
                                                label="Continue with Google"
                                                onClick={() => signIn("google", { callbackUrl: "/" })}
                                            />

                                            <SocialButton
                                                icon={fbImg}
                                                label="Continue with Facebook"
                                                // onClick={() => signIn("facebook", { callbackUrl: "/" })}
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* --- End Login Section --- */}
                    </div>
                </div>
            </div>
        </div>
        // <section className="login-block bg-light p-5">
        //   <div className="container-fluid">
        //     <div className="row align-items-center">
        //       {/* --- Left Login Section --- */}
        //       <div className="col-md-4 login-sec bg-white p-4 rounded-4 shadow-sm">
        //         <div className="d-flex justify-content-center">
        //           <Image alt="logo" src={Logo} className="rounded-circle border"
        //             style={{ width: "138px", height: "137px", objectFit: "cover" }} />
        //         </div>
        //         {/* <h2 className="text-center mb-4 text-uppercase fw-bold text-primary">
        //           Login Now
        //         </h2> */}
        //         <form className="login-form">
        //           <div className="form-group mb-3">
        //             <i className="fa fa-user me-2" style={{ fontSize: "12px" }}></i>
        //             <label
        //               htmlFor="exampleInputEmail1"
        //               className="text-uppercase"
        //               style={{ fontFamily: "sans-serif", fontSize: "12px" }}
        //             >
        //               Username
        //             </label>
        //             <input
        //               type="text"
        //               className="form-control mt-1"
        //               placeholder="Enter your username"
        //             />
        //           </div>

        //           <div className="form-group mb-3">
        //             <i className="fa fa-key me-2" style={{ fontSize: "12px" }}></i>
        //             <label
        //               htmlFor="exampleInputPassword1"
        //               className="text-uppercase"
        //               style={{ fontFamily: "sans-serif", fontSize: "12px" }}
        //             >
        //               Password
        //             </label>
        //             <input
        //               type="password"
        //               className="form-control mt-1"
        //               placeholder="Enter your Password"
        //             />
        //           </div>

        //           <a
        //             href="#"
        //             className="d-block text-end fw-bold text-decoration-underline"
        //             style={{ fontSize: "14px", color: "#DE6262" }}
        //           >
        //             Forgot Your Password?
        //           </a>

        //           <button
        //             type="submit"
        //             className="btn btn-danger w-100 mt-3 rounded-pill"
        //           >
        //             Login
        //           </button>

        //           <div className="strike my-3 text-center position-relative">
        //             <span className="bg-white px-3 text-muted small">OR</span>
        //           </div>

        //           <div className="social-login text-center mb-2">
        //             <small className="text-secondary">
        //               Login with your Social Media Account
        //             </small>
        //           </div>

        //           <SocialButton
        //             icon={fbImg}
        //             label="Continue with Google"
        //               onClick={() => signIn("google",{callbackUrl:"/"})}
        //           />

        //           <SocialButton
        //             icon={GoogleImg}
        //             label="Continue with Facebook"
        //               onClick={() => signIn("facebook")}
        //           />
        //           <div className="social-media-icons d-flex justify-content-center">
        //             <ul className="list-unstyled d-flex gap-3">
        //               <li>
        //                 <i className="fab fa-facebook fa-lg text-primary"></i>
        //               </li>
        //               <li>
        //                 <i className="fab fa-twitter fa-lg text-info"></i>
        //               </li>
        //               <li>
        //                 <i className="fab fa-linkedin-in fa-lg text-primary"></i>
        //               </li>
        //             </ul>
        //           </div>
        //         </form>

        //         <div className="copy-text text-center mt-4">
        //           <small>
        //             Don't have an Account?{" "}
        //             <a href="/signin" className="text-danger fw-bold">
        //               Sign Up
        //             </a>
        //           </small>
        //         </div>
        //       </div>


        //     </div>
        //   </div>
        // </section>
    );
};

export default SigninModal;
