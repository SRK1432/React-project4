import React from "react";
import "./UserLogout.css"; 

const UserLogout = ({ onLogout }) => {
  return (
    <div className="user-logout-container"> 
      <header className="logout-header"> 
        <h1>A Typical Page</h1>
        <div>Users</div>
        <div>Admin</div>
        <button type="button" onClick={onLogout}>Logout</button>
      </header>
      <div className="welcome-message"> 
        <p>Welcome Back!</p>
      </div>
    </div>
  );
};

export default UserLogout;
