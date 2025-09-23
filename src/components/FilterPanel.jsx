import React, { useState } from "react";
// import "./FilterPanel.css";

const departments = ["Finance", "Sales", "Marketing", "Admin"];

export default function FilterPanel({ open, onClose, onFilter, filters }) {
  const [localFilters, setLocalFilters] = useState(filters);

  if (!open) return null;

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal glass" onClick={e => e.stopPropagation()}>
        <h3>Filter Users</h3>
        <form onSubmit={e => {
          e.preventDefault();
          onFilter(localFilters);
        }}>
          <input
            placeholder="Name"
            value={localFilters.name || ""}
            onChange={e => setLocalFilters({ ...localFilters, name: e.target.value })}
          />
          <input
            placeholder="Email"
            value={localFilters.email || ""}
            onChange={e => setLocalFilters({ ...localFilters, email: e.target.value })}
          />
          <select
            value={localFilters.department || ""}
            onChange={e => setLocalFilters({ ...localFilters, department: e.target.value })}
          >
            <option value="">All Departments</option>
            {departments.map(d => <option key={d}>{d}</option>)}
          </select>
          <div className="modal-actions">
            <button type="submit">Apply</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
