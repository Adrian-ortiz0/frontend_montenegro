import React from "react";

const AdminClientsTable = () => {
  return (
    <div className="admin_sections">
      <div className="admin_clients-container">
        <div className="admin_clients-columns">
          <div>
            <p>ID</p>
          </div>
          <div>
            <p>Name</p>
          </div>
          <div>
            <p>Last Name</p>
          </div>
          <div>
            <p>Email</p>
          </div>
          <div>
            <p>Total Orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminClientsTable;
