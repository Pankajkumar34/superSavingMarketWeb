"use client";
import React from "react";

const SideBarMenus = () => {
  return (
    <>
      {/* Desktop Navbar (Visible on lg and above) */}
      <nav className="navbar navbar-expand-lg shadow-sm d-none d-lg-block mt-0">
        <div className="container">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-house-door me-1"></i>Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-person me-1"></i>Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-box-seam me-1"></i>Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-building me-1"></i>Apply Franchise
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-gear me-1"></i>Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-info-circle me-1"></i>About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-danger" href="#">
                <i className="bi bi-box-arrow-right me-1"></i>Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar (Visible on md and below) */}
      <div
        className="offcanvas offcanvas-end d-lg-none"
        tabIndex={-1}
        id="sidebarMenu"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li>
              <i className="bi bi-house-door me-2"></i>Home
            </li>
            <li>
              <i className="bi bi-person-plus me-2"></i>Register
            </li>
            <li>
              <i className="bi bi-person me-2"></i>Profile
            </li>
            <li>
              <i className="bi bi-box-seam me-2"></i>Orders
            </li>
            <li>
              <i className="bi bi-building me-2"></i>Apply Franchise
            </li>
            <li>
              <i className="bi bi-gear me-2"></i>Settings
            </li>
            <li>
              <i className="bi bi-info-circle me-2"></i>About Us
            </li>
            <li className="text-danger">
              <i className="bi bi-box-arrow-right me-2"></i>Logout
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBarMenus;
