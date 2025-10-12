import React from "react";
const NavBar =()=>{
    return(
         <div className="d-flex justify-content-between align-items-center mb-3 px-2 flex-wrap">

        {/* <!-- Left: Logo + Company Name --> */}
        <div className="d-flex align-items-center">

          {/* <!-- This is the dynamics of teh  user image but in by defould here will be market logo --> */}
          <img src="/IconFolder\MarketLogo.png" className="rounded-circle border"
             style={{ width: "40px", height: "40px", objectFit: "cover" }}/>


          {/* <!-- This is the top of the heading of the  --> */}
          {/* <h6 className="mb-0 fw-semibold company-title ps-2" style={{
            fontFamily: "'Merriweather', serif",
            fontWeight: "bolder",
            color: "#007bff",
            textShadow: "1px 1px 4px rgba(118, 116, 116, 0.7)",
          }}>
            Super Saving Market
          </h6> */}
        </div>

        {/* <!-- Right: Notification + Sidebar Trigger --> */}
        <div className="d-flex align-items-center justify-content-end">
          <i className="bi bi-bell fs-5 me-3"></i>

          {/* <!-- Sidebar Trigger --> */}
          <button className="btn p-0 border-0 bg-transparent" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu">
            <i className="bi bi-list fs-3"></i>
          </button>
        </div>
      </div>
    )
}

export default NavBar