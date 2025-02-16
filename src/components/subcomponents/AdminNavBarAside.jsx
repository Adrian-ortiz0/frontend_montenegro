import React from 'react';
import { ShoppingCart, People, Assignment, ExitToApp, AccountCircle, Inventory } from '@mui/icons-material';
import { useNavigate } from 'react-router';

const AdminNavBarAside = () => {

const navigate = useNavigate();

  return (
    <aside className='aside_container'>
      <div className='nav_buttons'>
        <div className="logo_section">
          <h2>Montenegro</h2>
          <span className="admin-label">Admin Panel</span>
        </div>
        <button className="nav_button" onClick={() => navigate("/admin-dashboard")}>
          <Inventory className="nav_icon" />
          <span>Productos</span>
        </button>
        <button className="nav_button" onClick={() => navigate("/admin-orders")}>
          <ShoppingCart className="nav_icon" />
          <span>Pedidos</span>
        </button>
        <button className="nav_button" onClick={() => navigate("/admin-clients")}>
          <People className="nav_icon" />
          <span>Clientes</span>
        </button>
        <button className="nav_button" onClick={() => navigate("/admin-sales")}>
          <Assignment className="nav_icon" />
          <span>Ventas</span>
        </button>
      </div>
      <div className='profile_buttons'>
        <button className="nav_button">
          <AccountCircle className="nav_icon" />
          <span>Perfil</span>
        </button>
        <button className="nav_button" id='log_out-button' onClick={() => navigate("/")}>
          <ExitToApp className="nav_icon" />
          <span>Salir</span>
        </button>
      </div>
    </aside>
  )
}

export default AdminNavBarAside