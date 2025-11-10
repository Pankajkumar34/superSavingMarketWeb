"use client"

import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect } from "react";
import { Logo, Userimg } from "../assetsImport/allAssets";
import { useRouter } from "next/navigation";
const NavBar = () => {
  const [userData, setUserData] = React.useState(null);
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return null;
  }

  const user = session?.user;
  const loginHandle = () => {
    router.push('/login')
  }

  return (
    <div className="mx-auto inner-dashboard">
      <div className="d-flex justify-content-between align-items-center mb-3 px-2 flex-wrap">

        {/* <!-- Left: Logo + Company Name --> */}
        <div className="d-flex align-items-center">

          {/* <!-- This is the dynamics of teh  user image but in by defould here will be market logo --> */}
          <Image src={Logo} alt="Profile"
            className="rounded-circle me-3 border border-dark"
            width="60" height="60" />

        </div>

        {/* <!-- Right: Notification + Sidebar Trigger --> */}
        <div className="d-flex align-items-center justify-content-end">
          <i className="bi bi-bell fs-5 me-3"></i>


          {/* <!-- 👤 Profile Circle Image --> */}
          {user ? (
            <Image
              src={session?.user.image || Userimg}
              alt="Profile"
              className="rounded-circle me-3 border border-dark"
              width={40}
              height={40}
            />
          ) : (
            <button type="button" onClick={loginHandle}
              className="btn btn-primary"
            >
              Login
            </button>
          )}
          {/* {
            userData? <Image src={userData?.image || Userimg} alt="Profile"
            className="rounded-circle me-3 border border-dark"
            width="40" height="40" />
            : <button>Login</button>
          } */}


          {/* <!-- Sidebar Trigger --> */}
          <button className="btn p-0 border-0 bg-transparent d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu">
            <i className="bi bi-list fs-3"></i>
          </button>
        </div>
      </div>
    </div>


  )
}

export default NavBar