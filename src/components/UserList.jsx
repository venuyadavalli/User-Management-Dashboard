import React from "react";
// import "./UserList.css";

export default function UserList({ users, onEdit, onDelete, view }) {
  return view === "table" ? (
    <table className="user-table glass">
      <thead>
        <tr>
          <th>ID</th><th>First Name</th><th>Last Name</th>
          <th>Email</th><th>Department</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(u => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.firstName}</td>
            <td>{u.lastName}</td>
            <td>{u.email}</td>
            <td>{u.department}</td>
            <td>
              <button className="action-btn edit" onClick={() => onEdit(u)}>Edit</button>
              <button className="action-btn delete" onClick={() => onDelete(u)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div className="user-cards">
      {users.map(u => (
        <div className="user-card glass" key={u.id}>
          <div className="card-header">
            <span className="card-id">{u.id}</span>
            <span className="card-dept">{u.department}</span>
          </div>
          <div className="card-body">
            <div>{u.firstName} {u.lastName}</div>
            <div>{u.email}</div>
          </div>
          <div className="card-actions">
            <button className="action-btn edit" onClick={() => onEdit(u)}>Edit</button>
            <button className="action-btn delete" onClick={() => onDelete(u)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
        
        

      
        


