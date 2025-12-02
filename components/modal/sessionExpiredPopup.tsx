"use client";

import { useEffect, useRef } from "react";

export default function SessionExpiredModal({ show }:any) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!modalRef.current) return;
    const modal = new window.bootstrap.Modal(modalRef.current); // IMPORTANT
    show ? modal.show() : modal.hide();
  }, [show]);

  return (
    <div className="modal fade" ref={modalRef} tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title">Session Expired</h5>
          </div>
          <div className="modal-body">
            Your session has expired. Please login again.
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary"
              onClick={() => (window.location.href = "/login")}
            >
              Login Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
