"use client";

import { Userimg } from "@/components/assetsImport/allAssets";
import { useSession } from "next-auth/react";
import Image from "next/image";

import './profile.css';
import SavingCard from "@/components/savingCard/savinCard";
import Guideline from "@/components/savingCard/guideLine";

const textStyle = {
    textShadow: "1px 1.5px grey",
    fontFamily: "Lato, sans-serif",
};

export default function ProfileContainer() {
const { data: session } = useSession();
console.log("Profile Container Loaded",session,);

    return (
        <div className="container py-4">
            {/* <!-- Header --> */ }
            <div className="text-center mb-4">
                <h2 className="fw-bold text-danger" style={textStyle}>Super Saving Market</h2>
                <p className="text-muted mb-0">More Shopping, More Saving</p>
            </div>

            {/* <!-- Primary Details --> */}
            <div className="d-flex justify-content-center" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                <div className="card shadow-sm mb-4 w-100" style={{ maxWidth: " 700px" }}>
                    <div className="card-body">
                        <h5 className="card-title text-primary fw-bold mb-3 text-center">Primary Details</h5>

                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center text-md-start text-center">

                            {/* <!-- Profile Image --> */}
                            <div className="me-md-4 mb-3 mb-md-0">
                                <Image src={session?.user?.image || Userimg}
                                    alt="Profile Photo"
                                    className="rounded border shadow-sm"  width="60" height="60"
                                    style={{ width: "100px", height: "120px", objectFit: "cover" }} />
                            </div>

                            {/* <!-- Profile Info --> */}
                            <div>
                                <p className="mb-1"><strong>Name:</strong> {session?.user?.name}</p>
                                <p className="mb-1"><strong>Parents Franchise:</strong> Super Saving Market</p>
                                <p className="mb-1"><strong>Account Number:</strong> XXXXXXXXXXXX</p>
                                <p className="mb-0"><strong>Mobile Number:</strong> +91 7081023366</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- Two Column Details --> */}

            <div className="row g-3">
                   {/* Contact Details Card */}
    <div className="col-lg-4 col-md-6 col-12">
        <div className="card shadow-sm h-100">
            <div className="card-body">
                <h5 className="card-title text-primary fw-bold">Contact Details</h5>
                <p className="mb-1"><strong>Village:</strong> Chainpur</p>
                <p className="mb-1"><strong>Post:</strong> Shankaratkhouli</p>
                <p className="mb-1"><strong>District:</strong> Kushinagar</p>
                <p className="mb-1"><strong>Police:</strong> Choura Khash</p>
                <p className="mb-1"><strong>Secondary No.:</strong> 7081535988</p>
                <p className="mb-1"><strong>WhatsApp:</strong> 7081023366</p>
                <p className="mb-1"><strong>State:</strong> Uttar Pradesh</p>
                <p className="mb-0"><strong>Region:</strong> India</p>
            </div>
        </div>
    </div>

    {/* Account Details Card */}
    <div className="col-lg-4 col-md-6 col-12">
        <div className="card shadow-sm h-100">
            <div className="card-body">
                <h5 className="card-title text-primary fw-bold">Account Details</h5>
                <p className="mb-1"><strong>Account Type:</strong> Self</p>
                <p className="mb-1"><strong>Withdrawal:</strong> 540</p>
                <p className="mb-1"><strong>Saving:</strong> 40</p>
                <p className="mb-0"><strong>Account Age:</strong> 4 Months</p>
            </div>
        </div>
    </div>


                <div className="col-lg-4 col-md-12">
                    <div className="card shadow-sm h-100">
                        <div className="card-body text-center">
                            <h5 className="card-title text-primary fw-bold">Important Menu</h5>
                            <div className="d-grid gap-2 mt-3">
                                <button className="btn btn-outline-primary">Edit Your Profile</button>
                                <button className="btn btn-outline-success">Withdrawal Saving</button>
                                <button className="btn btn-outline-info">Know Your Saving</button>
                                <button className="btn btn-outline-dark">Buy New Services</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Saving Card and Guidelines --> */}

            {/* <!-- Container --> */}
            <div className="container my-4">
                <div className="row g-3 align-items-stretch">

                    {/* <!-- Saving Card --> */}
                    <SavingCard />

                    {/* <!-- Guideline Card --> */}
                    <Guideline />

                </div>
            </div>


            {/* <!-- Extra Professional Sections --> */}
            <div className="row mt-4 g-3">
                <div className="col-md-6">
                    <div className="card shadow-sm p-3">
                        <h5 className="text-primary fw-bold mb-2">Recent Transactions</h5>
                        <ul className="list-group list-group-flush small">
                            <li className="list-group-item">Purchase - Grocery Items - ₹250</li>
                            <li className="list-group-item">Cashback Received - ₹40</li>
                            <li className="list-group-item">Online Order - Stationary - ₹120</li>
                            <li className="list-group-item">Saving Deposit - ₹100</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow-sm p-3 text-center">
                        <h5 className="text-primary fw-bold mb-2">Customer Rank</h5>
                        <div className="display-6 fw-bold text-success">Gold Member 🏅</div>
                        <p className="text-muted small mt-2">You are among the top 10% savers!</p>
                    </div>
                </div>
            </div>


        </div>
    );
}
