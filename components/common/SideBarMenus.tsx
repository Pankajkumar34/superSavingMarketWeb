"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const SideBarMenus = () => {
  const { data: session, status } = useSession();
  if (status === "loading") return null;
  const user = session?.user;

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
    window.location.reload();
  };
  return (
    <>
      <div className="mx-auto inner-dashboard">
        <nav className="navbar navbar-expand-lg shadow-sm d-none d-lg-block mt-0">
          <div className="container">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  <i className="bi bi-house-door me-1"></i>Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/profile" className="nav-link">
                  <i className="bi bi-person me-1"></i>Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/orders" className="nav-link">
                  <i className="bi bi-box-seam me-1"></i>Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/apply-franchise" className="nav-link">
                  <i className="bi bi-building me-1"></i>Apply Franchise
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/settings" className="nav-link">
                  <i className="bi bi-gear me-1"></i>Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about-us" className="nav-link">
                  <i className="bi bi-info-circle me-1"></i>About Us
                </Link>
              </li>

              {
                user && (
                  <li className="nav-item" onClick={() => handleLogout()}>
                    <a className="nav-link text-danger" href="#">
                      <i className="bi bi-box-arrow-right me-1 cursor-pointer" ></i>Loogout
                    </a>
                  </li>
                )
              }

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
                <Link href="/" className="nav-link">
                  <i className="bi bi-house-door me-2"></i>Home
                </Link>
              </li>
              <li>
                <Link href="/signup" className="nav-link">
                  <i className="bi bi-person-plus me-2"></i>Register
                </Link>
              </li>
              <li>
                <Link href="/profile" className="nav-link">
                  <i className="bi bi-person me-2"></i>Profile
                </Link>
              </li>
              <li>
                <Link href="/orders" className="nav-link">
                  <i className="bi bi-box-seam me-2"></i>Orders
                </Link>
              </li>
              <li>
                <Link href="/orders" className="nav-link">
                  <i className="bi bi-building me-2"></i>Apply Franchise
                </Link>
              </li>
              <li>
                <Link href="/orders" className="nav-link">
                  <i className="bi bi-gear me-2"></i>Settings
                </Link>
              </li>
              <li>
                <Link href="/orders" className="nav-link">
                  <i className="bi bi-info-circle me-2"></i>About Us
                </Link>
              </li>
              <li className="text-danger">
                <i className="bi bi-box-arrow-right me-2"></i>Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarMenus;
