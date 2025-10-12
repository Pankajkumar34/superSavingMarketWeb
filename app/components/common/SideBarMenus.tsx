 import React from "react";

 const SideBarMenus =()=>{
    return(
         <div className="offcanvas offcanvas-end" tabIndex={-1} id="sidebarMenu">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <ul>
            <li><i className="bi bi-house-door me-2"></i>Home</li>
            <li><i className="bi bi-person me-2"></i>Profile</li>
            <li><i className="bi bi-box-seam me-2"></i>Orders</li>
            <li><i className="bi bi-building me-2"></i>Apply Franchise</li>
            <li><i className="bi bi-gear me-2"></i>Settings</li>
            <li><i className="bi bi-box-arrow-right me-2"></i>Logout</li>
            <li><i className="bi bi-info-circle me-2"></i>About Us</li>
          </ul>

        </div>
      </div>
    )
}


export default SideBarMenus