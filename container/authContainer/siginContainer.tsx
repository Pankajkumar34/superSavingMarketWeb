"use client";

import React from "react";
import Image from "next/image";
import { fbImg, GoogleImg, Logo } from "@/components/assetsImport/allAssets";
import SocialButton from "@/components/social/socialButton";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
type CarouselImage = {
  id: number;
  src: string;
  alt: string;
};
const SiginContainer: React.FC = () => {
  const [inputData, setInputData] = React.useState({ email: "", password: "" });
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();

  const images: CarouselImage[] = [
    { id: 1, src: "/slider/sl1.jpg", alt: "CEO Image 1" },
    { id: 2, src: "/slider/sl2.jpg", alt: "CEO Image 2" },
    { id: 3, src: "/slider/sl3.jpg", alt: "CEO Image 3" },
  ];
const socialLoginHandler=async (e: Event, provider: string) => {
    e.preventDefault()
    signIn(provider, { callbackUrl: "/complete-profile" });
  }
  
  const socialCredLogin=async(e: Event, provider: string) => {
    e.preventDefault()
     const res:any = await signIn("credentials", {
    redirect: false,
    email: inputData.email || "test@gmail.com",
    password: inputData.password || "test1234",
  });

  if (res.error) {
    setError("Invalid email or password");
  } else {
    router.push("/");
  }

  }
 
return (
  <section className="login-block bg-light p-5">
    <div className="container-fluid">
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
        {/* --- Left Login Section --- */}
        <div className="col-md-4 login-sec bg-white p-4 rounded-4 shadow-sm">
          <div className="d-flex justify-content-center">
            <Image alt="logo" src={Logo} className="rounded-circle border"
              style={{ width: "138px", height: "137px", objectFit: "cover" }} />
          </div>
          {/* <h2 className="text-center mb-4 text-uppercase fw-bold text-primary">
              Login Now
            </h2> */}
          <form className="login-form">
            <div className="form-group mb-3">
              <i className="fa fa-user me-2" style={{ fontSize: "12px" }}></i>
              <label
                htmlFor="exampleInputEmail1"
                className="text-uppercase"
                style={{ fontFamily: "sans-serif", fontSize: "12px" }}
              >
                Username
              </label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter your username"
              />
            </div>

            <div className="form-group mb-3">
              <i className="fa fa-key me-2" style={{ fontSize: "12px" }}></i>
              <label
                htmlFor="exampleInputPassword1"
                className="text-uppercase"
                style={{ fontFamily: "sans-serif", fontSize: "12px" }}
              >
                Password
              </label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter your Password"
              />
            </div>

            <a
              href="#"
              className="d-block text-end fw-bold text-decoration-underline"
              style={{ fontSize: "14px", color: "#DE6262" }}
            >
              Forgot Your Password?
            </a>

            <button
              type="submit" onClick={(e:Event)=>socialCredLogin(e)}
              className="btn btn-danger w-100 mt-3 rounded-pill"
            >
              Login
            </button>

            <div className="strike my-3 text-center position-relative">
              <span className="bg-white px-3 text-muted small">OR</span>
            </div>

            <div className="social-login text-center mb-2">
              <small className="text-secondary">
                Login with your Social Media Account
              </small>
            </div>
            <SocialButton
              icon={GoogleImg}
              label="Continue with Google"
              onClick={(e: Event) => socialLoginHandler(e, "google")}
            />

            <SocialButton
              icon={fbImg}
              label="Continue with Facebook"
            // onClick={() => signIn("facebook", { callbackUrl: "/" })}
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
          </form>

          <div className="copy-text text-center mt-4">
            <small>
              Don't have an Account?{" "}
              <a href="/signup" className="text-danger fw-bold">
                Sign Up
              </a>
            </small>
          </div>
        </div>

        {/* --- Right Carousel Section --- */}
        <div className="col-md-8 banner-sec mt-4 mt-md-0">
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

export default SiginContainer;
