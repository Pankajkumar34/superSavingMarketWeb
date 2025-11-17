import React from "react";
import { Userimg } from "../assetsImport/allAssets";
import Image from "next/image";
import { useSession } from "next-auth/react";

const SavingCard: React.FC = () => {
    const { data: session } = useSession();

    return(
        <>
          <div className="col-lg-6 col-md-12">
                        <div className="card-custom h-100">
                            <div className="top-section d-flex justify-content-between align-items-center">
                                <div>
                                    <div className="title">Super Saving Market</div>
                                    <div className="subtitle">More Shopping More Saving</div>
                                </div>
                                <Image src={session?.user?.image || Userimg} alt="India Flag" className="flag" style={{height:"60px"}}  width="60" height="60"/>
                            </div>

                            <div className="d-flex mt-3 flex-wrap">
                                <div className="photo-box me-3 mb-2">
                                    <Image src={session?.user?.image || Userimg}
                                    alt="Profile Photo"
                                    className=" shadow-sm"
                                     style={{width:"100%", height:"100%", objectFit:"cover"}}  width="60" height="60"/></div>
                                <div className="details">
                                    <div><b>Name:</b> {session?.user?.name}</div>
                                    <div><b>Village:</b> Chaipur</div>
                                    <div><b>Mobile No.:</b> +91 7081023366</div>
                                    <div><b>Account No.:</b> XXXXXXXXXX</div>
                                </div>
                            </div>

                            <div className="bottom-section mt-3 d-flex justify-content-between small">
                                <div><i className="bi bi-globe"></i> www.savingmarket.in</div>
                                <div><i className="bi bi-headset"></i> +91 7081535988</div>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default SavingCard;