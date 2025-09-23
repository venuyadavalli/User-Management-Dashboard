import React from "react";
// import "./Navbar.css";

export default function Navbar({ onAdd, onFilter, onSearch, searchValue }) {
  return (
    <nav className="navbar glass">
      <h1>User Management Dashboard</h1>
      <div className="navbar-actions">
        <input
          type="text"
          placeholder="Search users..."
          value={searchValue}
          onChange={e => onSearch(e.target.value)}
        />
        <button onClick={onFilter}>Filter</button>
        <button onClick={onAdd}>Add User</button>
      </div>
    </nav>
  );
}
