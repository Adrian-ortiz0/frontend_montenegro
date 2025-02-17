import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const AdminProfileInfo = () => {
  return (
    <div className="admin_sections">
      <div className="admin_profile-container">
        <div className="profile">
          <div className="profile_info">
            <div className="profile_username">
              <AccountCircleIcon sx={{ width: 50, height: "100%" }} />
              <p>Adrian Ortiz</p>
            </div>
            <button>Edit Profile</button>
            <button>Create Admin</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfileInfo;
