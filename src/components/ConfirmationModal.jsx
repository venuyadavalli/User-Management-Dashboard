import React from "react";
// import "./ConfirmationModal.css";

export default function ConfirmationModal({ open, onClose, onConfirm, user }) {
  if (!open) return null;
  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal glass" onClick={e => e.stopPropagation()}>
        <h3>Delete User</h3>
        <p>Are you sure you want to delete <b>{user?.firstName} {user?.lastName}</b>?</p>
        <div className="modal-actions">
          <button onClick={onConfirm}>Delete</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
