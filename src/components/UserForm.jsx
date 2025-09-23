import React, { useState, useEffect } from "react";
// import "./UserForm.css";

const departments = ["Finance", "Sales", "Marketing", "Admin"];

export default function UserForm({ open, onClose, onSubmit, user }) {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", department: departments[0]
  });

  useEffect(() => {
    if (user) setForm(user);
    else setForm({ firstName: "", lastName: "", email: "", department: departments[0] });
  }, [user, open]);

  if (!open) return null;

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal glass" onClick={e => e.stopPropagation()}>
        <h2>{user ? "Edit User" : "Add User"}</h2>
        <form onSubmit={e => {
          e.preventDefault();
          onSubmit(form);
        }}>
          <input
            placeholder="First Name"
            value={form.firstName}
            onChange={e => setForm({ ...form, firstName: e.target.value })}
            required
          />
          <input
            placeholder="Last Name"
            value={form.lastName}
            onChange={e => setForm({ ...form, lastName: e.target.value })}
            required
          />
          <input
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
          />
          <select
            value={form.department}
            onChange={e => setForm({ ...form, department: e.target.value })}
          >
            {departments.map(d => <option key={d}>{d}</option>)}
          </select>
          <div className="modal-actions">
            <button type="submit">{user ? "Save" : "Add"}</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
