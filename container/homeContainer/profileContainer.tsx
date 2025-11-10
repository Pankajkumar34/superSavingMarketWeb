"use client";

import { Userimg } from "@/components/assetsImport/allAssets";
import Order from "@/components/order/order";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfileContainer() {
    const [activeSection, setActiveSection] = useState("addressBook");
    const [showAddAddress, setShowAddAddress] = useState(false);

    const { data: session, status } = useSession();
    const router = useRouter();
    if (status === "loading") {
        return null;
    }

    const user = session?.user;

    const showProfileDetails = () => setActiveSection("profileDetails");
    const showOrderDetails = () => setActiveSection("orderDetails");
    const showAddressBook = () => setActiveSection("addressBook");

    const showAddAddressModal = () => setShowAddAddress(true);
    const closeAddAddressModal = () => setShowAddAddress(false);

    const saveAddress = (e: Event) => {
        e.preventDefault();
        // Logic to save address goes here
        alert("Address saved!");
        setShowAddAddress(false);
    };
    return (
        <section className="my-5">
            <div className="container">
                <div className="main-body">
                    <div className="row">
                        {/* Left Sidebar */}
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <Image
                                            src={session?.user.image || Userimg}
                                            alt="Profile"
                                            className="rounded-circle p-1 bg-warning"
                                            width={100}
                                            height={100}
                                        />

                                        <div className="mt-3">
                                            <h4>{session?.user.name}</h4>
                                            <p className="text-secondary mb-1">+91 7493658737</p>
                                            <p className="text-muted font-size-sm">Delhi, NCR</p>
                                        </div>
                                    </div>
                                    <div className="list-group list-group-flush text-center mt-4">
                                        <button
                                            className={`list-group-item list-group-item-action border-0 ${activeSection === "profileDetails" ? "active" : ""
                                                }`}
                                            onClick={showProfileDetails}
                                        >
                                            Profile Information
                                        </button>
                                        <button
                                            className={`list-group-item list-group-item-action border-0 ${activeSection === "orderDetails" ? "active" : ""
                                                }`}
                                            onClick={showOrderDetails}
                                        >
                                            Orders
                                        </button>
                                        <button
                                            className={`list-group-item list-group-item-action border-0 ${activeSection === "addressBook" ? "active" : ""
                                                }`}
                                            onClick={showAddressBook}
                                        >
                                            Address Book
                                        </button>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="col-lg-8">
                            {/* Orders Section */}
                            {activeSection === "orderDetails" && (
                                <Order />
                            )}

                            {/* Profile Section */}
                            {activeSection === "profileDetails" && (
                                <div className="card">
                                    <div className="card-body">
                                        <div className="profile-info">
                                            <h5>Profile Information</h5>
                                            <p>
                                                <strong>Name:</strong> {session?.user.name}
                                            </p>
                                            <p>
                                                <strong>Email Address:</strong> {session?.user.email}
                                            </p>
                                            <p>
                                                <strong>Contact:</strong> +91 7493658737
                                            </p>
                                            <p>
                                                <strong>Date of Birth:</strong> 02-03-1999
                                            </p>
                                            <p>
                                                <strong>Gender:</strong> Female
                                            </p>
                                            <p>
                                                <strong>City:</strong> Delhi, NCR
                                            </p>
                                           
                                           
                                            <p>
                                                <strong>Preference:</strong> Pure Vegetarian
                                            </p>
                                            <p>
                                                <strong>Role:</strong> User
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Address Book Section */}
                            {activeSection === "addressBook" && (
                                <div className="card">
                                    <div className="card-body">
                                        <h5>Address Book</h5>
                                        <button
                                            className="add_address_button"
                                            onClick={showAddAddressModal}
                                        >
                                            Add Address
                                        </button>
                                        <div id="addressList">{/* List addresses here */}</div>
                                    </div>
                                </div>
                            )}

                            {/* Add Address Modal */}
                            {showAddAddress && (
                                <div className="modal">
                                    <div className="modal-content">
                                        <span className="close" onClick={closeAddAddressModal}>
                                            &times;
                                        </span>
                                        <h2>Add Address</h2>
                                        <form id="addAddressForm" onSubmit={saveAddress}>
                                            <div className="col-12 d-flex main_flex_div">
                                                <div className="col-4 d-flex flex-column inner_flex_div">
                                                    <label htmlFor="name">Name:</label>
                                                    <input type="text" id="name" required />
                                                </div>
                                                <div className="col-4 d-flex flex-column inner_flex_div">
                                                    <label htmlFor="mobile">Mobile No.:</label>
                                                    <input
                                                        type="tel"
                                                        id="mobile"
                                                        required
                                                        pattern="[0-9]{10}"
                                                    />
                                                </div>
                                                <div className="col-4 d-flex flex-column inner_flex_div">
                                                    <label htmlFor="pincode">Pin code:</label>
                                                    <input type="text" id="pincode" required />
                                                </div>
                                            </div>

                                            <div className="col-12 d-flex main_flex_div">
                                                <div className="col-4 d-flex flex-column inner_flex_div">
                                                    <label htmlFor="locality">Locality:</label>
                                                    <input type="text" id="locality" required />
                                                </div>
                                                <div className="col-4 d-flex flex-column inner_flex_div">
                                                    <label htmlFor="city">City/District/Town:</label>
                                                    <input type="text" id="city" required />
                                                </div>
                                                <div className="col-4 d-flex flex-column inner_flex_div">
                                                    <label htmlFor="state">State:</label>
                                                    <select id="state" required>
                                                        <option value="">Select a state</option>
                                                        <option value="State 1">State 1</option>
                                                        <option value="State 2">State 2</option>
                                                        <option value="State 3">State 3</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-12 d-flex main_flex_div">
                                                <div className="col-12 d-flex flex-column inner_flex_div">
                                                    <label htmlFor="address">Address:</label>
                                                    <textarea id="address" required></textarea>
                                                </div>
                                            </div>

                                            <div className="col-12 d-flex main_flex_div">
                                                <div className="col-6 d-flex flex-column inner_flex_div">
                                                    <label htmlFor="landmark">Landmark (Optional):</label>
                                                    <input type="text" id="landmark" />
                                                </div>
                                                <div className="col-6 d-flex flex-column inner_flex_div">
                                                    <label htmlFor="alternatePhone">
                                                        Alternate Phone (Optional):
                                                    </label>
                                                    <input type="tel" id="alternatePhone" pattern="[0-9]{10}" />
                                                </div>
                                            </div>

                                            <div className="col-12 d-flex button_div">
                                                <button type="submit">Save</button>
                                                <button type="button" onClick={closeAddAddressModal}>
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
