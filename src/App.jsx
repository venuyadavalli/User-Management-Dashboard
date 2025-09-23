import React from "react";
import { UserProvider } from "./context/UserContext";
import Dashboard from "./pages/Dashboard";
import "./App.css"; // Add this line

function App() {
  return (
    <UserProvider>
      <Dashboard />
    </UserProvider>
  );
}

export default App;
