import React, { createContext, useState, useEffect } from "react";
import { fetchUsers, createUser, updateUser, deleteUser } from "../services/api";
// Import lastId directly
import { lastId } from "../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then(data => {
      setUsers(data);
      setLoading(false);
      // Set lastId to max id from fetched users
      if (data.length > 0) {
        // Update lastId directly
        // eslint-disable-next-line
        lastId.value = Math.max(...data.map(u => u.id));
      }
    });
  }, []);

  // CRUD actions
  const addUser = async (user) => {
    const newUser = await createUser(user);
    setUsers(prev => [...prev, newUser]);
  };

  const editUser = async (id, updatedUser) => {
    await updateUser(id, updatedUser);
    setUsers(prev =>
      prev.map(u => (u.id === id ? { ...u, ...updatedUser } : u))
    );
  };

  const removeUser = async (id) => {
    await deleteUser(id);
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  return (
    <UserContext.Provider value={{
      users, loading, addUser, editUser, removeUser, setUsers
    }}>
      {children}
    </UserContext.Provider>
  );
};
