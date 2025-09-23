import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import ConfirmationModal from "../components/ConfirmationModal";
import FilterPanel from "../components/FilterPanel";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const { users, addUser, editUser, removeUser } = useContext(UserContext);

  const [view, setView] = useState("table");
  const [formOpen, setFormOpen] = useState(false);
  const [editUserObj, setEditUserObj] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteUserObj, setDeleteUserObj] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState("");
  // Pagination state
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);

  // Filtering & search logic
  const filteredUsers = users.filter(u => {
    const matchesName = filters.name ? (u.firstName + " " + u.lastName).toLowerCase().includes(filters.name.toLowerCase()) : true;
    const matchesEmail = filters.email ? u.email.toLowerCase().includes(filters.email.toLowerCase()) : true;
    const matchesDept = filters.department ? u.department === filters.department : true;
    // Updated search: matches any field
    const matchesSearch = search
      ? (
          u.firstName.toLowerCase().includes(search.toLowerCase()) ||
          u.lastName.toLowerCase().includes(search.toLowerCase()) ||
          u.email.toLowerCase().includes(search.toLowerCase()) ||
          u.department.toLowerCase().includes(search.toLowerCase())
        )
      : true;
    return matchesName && matchesEmail && matchesDept && matchesSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / pageSize);
  const pagedUsers = filteredUsers.slice((page - 1) * pageSize, page * pageSize);

  // Reset page if pageSize or filteredUsers changes
  React.useEffect(() => {
    setPage(1);
  }, [pageSize, filteredUsers.length]);

  return (
    <div>
      <Navbar
        onAdd={() => { setEditUserObj(null); setFormOpen(true); }}
        onFilter={() => setFilterOpen(true)}
        onSearch={setSearch}
        searchValue={search}
      />
      <div className="view-switch glass">
        <button onClick={() => setView("table")}>Table View</button>
        <button onClick={() => setView("card")}>Card View</button>
      </div>
      <UserList
        users={pagedUsers}
        view={view}
        onEdit={u => { setEditUserObj(u); setFormOpen(true); }}
        onDelete={u => { setDeleteUserObj(u); setDeleteOpen(true); }}
      />
      {/* Pagination controls under the table/card list */}
      <div className="pagination-controls glass" style={{
        margin: "16px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>Rows per page:</span>
          <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
            {[10, 25, 50, 100].map(size => <option key={size} value={size}>{size}</option>)}
          </select>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</button>
          <span>Page {page} of {totalPages || 1}</span>
          <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages || totalPages === 0}>Next</button>
        </div>
      </div>
      <UserForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={form => {
          if (editUserObj) editUser(editUserObj.id, form);
          else addUser(form);
          setFormOpen(false);
        }}
        user={editUserObj}
      />
      <ConfirmationModal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={() => {
          removeUser(deleteUserObj.id);
          setDeleteOpen(false);
        }}
        user={deleteUserObj}
      />
      <FilterPanel
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        onFilter={f => { setFilters(f); setFilterOpen(false); }}
        filters={filters}
      />
    </div>
  );
}
