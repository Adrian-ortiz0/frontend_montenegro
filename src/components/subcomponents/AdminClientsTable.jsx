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
        <div className="admin_cliente-table">
          <div className="admin_clients-row">
            <div>
              <p>1</p>
            </div>
            <div>
              <p>Adrian</p>
            </div>
            <div>
              <p>Ortiz</p>
            </div>
            <div>
              <p>dxniel7328@gmail.com</p>
            </div>
            <div>
              <p>5</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AdminClientsTable;
