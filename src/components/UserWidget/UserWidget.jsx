import { FaUser } from "react-icons/fa"; 
import React from "react";
import { Link } from "react-router-dom"; 

const UserWidget = () => {
 
  return (
    <div>
      <Link to="/admin" className="navbar-user">
          <FaUser className="user-icon" />  
      </Link>
    </div>
  );
};

export default UserWidget;