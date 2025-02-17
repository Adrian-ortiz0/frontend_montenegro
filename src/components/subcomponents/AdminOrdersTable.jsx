import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const AdminOrdersTable = () => {
  const orders = [
    {
      id: 1,
      orderNumber: "ORD-001",
      client: "Juan Pérez",
      date: "2024-02-16",
      status: "Pendiente"
    },
    {
      id: 2,
      orderNumber: "ORD-002",
      client: "María García",
      date: "2024-02-16",
      status: "Completada"
    }
  ];

  return (
    <div className='admin_sections'>
      <div className='admin_orders-container'>
        <div className='admin_orders-columns'>
          <div>
            <p>ID</p>
          </div>
          <div>
            <p>N°Order</p>
          </div>
          <div>
            <p>Cliente</p>
          </div>
          <div>
            <p>Fecha Orden</p>
          </div>
          <div>
            <p>Estado</p>
          </div>
          <div>
            <p>Acciones</p>
          </div>
        </div>
        <div className='admin_orders-table'>
          {orders.map((order) => (
            <div key={order.id} className='admin_orders-row'>
              <div>
                <p>{order.id}</p>
              </div>
              <div>
                <p>{order.orderNumber}</p>
              </div>
              <div>
                <p>{order.client}</p>
              </div>
              <div>
                <p>{order.date}</p>
              </div>
              <div>
                <p>{order.status}</p>
              </div>
              <div className='action_buttons'>
                <button className="action-button">
                  <DeleteIcon />
                </button>
                <button className="action-button">
                  <EditIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminOrdersTable;
