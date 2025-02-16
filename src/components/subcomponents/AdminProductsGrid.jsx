import React, { useState } from "react";
import { Add, Loupe } from "@mui/icons-material";
import { colors, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const AdminProductsGrid = () => {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const productos = [
    {
      id: 1,
      nombre: "Pizza pollo champiñon",
      precio: "15.000",
      img: "https://img.freepik.com/fotos-premium/pizza-pollo-champinones-tabla-madera_112304-1470.jpg",
    },
    {
      id: 2,
      nombre: "Pizza hawaiana",
      precio: "16.000",
      img: "https://img.freepik.com/fotos-premium/pizza-hawaiana-tabla-madera_112304-1471.jpg",
    },
    {
      id: 3,
      nombre: "Pizza pepperoni",
      precio: "14.000",
      img: "https://img.freepik.com/fotos-premium/pizza-pepperoni-tabla-madera_112304-1472.jpg",
    },
    {
      id: 4,
      nombre: "Pizza pollo champiñon",
      precio: "15.000",
      img: "https://img.freepik.com/fotos-premium/pizza-pollo-champinones-tabla-madera_112304-1470.jpg",
    },
    {
      id: 5,
      nombre: "Pizza hawaiana",
      precio: "16.000",
      img: "https://img.freepik.com/fotos-premium/pizza-hawaiana-tabla-madera_112304-1471.jpg",
    },
    {
      id: 6,
      nombre: "Pizza pepperoni",
      precio: "14.000",
      img: "https://img.freepik.com/fotos-premium/pizza-pepperoni-tabla-madera_112304-1472.jpg",
    },
    {
      id: 7,
      nombre: "Pizza pollo champiñon",
      precio: "15.000",
      img: "https://img.freepik.com/fotos-premium/pizza-pollo-champinones-tabla-madera_112304-1470.jpg",
    },
    {
      id: 8,
      nombre: "Pizza hawaiana",
      precio: "16.000",
      img: "https://img.freepik.com/fotos-premium/pizza-hawaiana-tabla-madera_112304-1471.jpg",
    },
    {
      id: 9,
      nombre: "Pizza pepperoni",
      precio: "14.000",
      img: "https://img.freepik.com/fotos-premium/pizza-pepperoni-tabla-madera_112304-1472.jpg",
    },
  ];

  return (
    <div className="admin_sections">
      <div className="products_container">
        <div className="products_options">
          <div className="input_products">
            <input type="text" placeholder="Buscar producto..." />
            <Loupe className="nav_icon" />
          </div>
          <button className="add_button">
            <Add className="nav_icon" />
          </button>
        </div>
        <div className="products">
          {productos.map((producto) => (
            <div key={producto.id} className="product_card">
              <img src={producto.img} alt={producto.nombre} />
              <div>
                <h3>{producto.nombre}</h3>
                <p>{producto.precio} COP</p>
                <IconButton
                  aria-label="more"
                  sx={{
                    position: "absolute",
                    top: 50,
                    right: 5,
                    color: "grey",

                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(e);
                  }}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    paper: {
                      style: {
                        backgroundColor: "#2c2c2c",
                        color: "white",
                      }
                    }
                  }}
                >
                  <MenuItem onClick={handleClose}>Editar</MenuItem>
                  <MenuItem onClick={handleClose}>Eliminar</MenuItem>
                </Menu>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProductsGrid;
