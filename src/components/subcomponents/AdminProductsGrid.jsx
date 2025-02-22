import React, { useEffect, useState } from "react";
import { Add, Loupe } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Select,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ProductsModal from "../microComponents/ProductsModal";
import axiosInstance from "../../AxiosConfiguration";

const AdminProductsGrid = () => {
  const [anchorEl, setAnchorEl] = useState();
  const [ingredientes, setIngredientes] = useState([]);

  const getIngredients = async () => {
    try{
      const response = await axiosInstance.get("/admin/ingredient");
      console.log("Ingredientes", response.data);
      setIngredientes(response.data);

    } catch(error){
      console.error("Error fetching ingredientes", error)
    }
  }

  useEffect(() => {
    getIngredients();
  }, []);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [categoryProducts, setCategoryProducts] = useState("");

  const handleChange = (e) => {
    setCategoryProducts(e.target.value);
  };

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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

          <button className="add_button" onClick={handleOpenModal}>
            <Add className="nav_icon" />
          </button>
          <FormControl
            sx={{
              m: 1,
              minWidth: 120,
              backgroundColor: "#2c2c2c",
              color: "white",
              borderRadius: "15px",
              marginRight: 3,
            }}
            size="small"
          >
            <InputLabel id="demo-select-small-label" sx={{ color: "#b8b8b8" }}>
              Category
            </InputLabel>
            <Select
              sx={{ color: "#888888", borderRadius: "15px" }}
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={categoryProducts}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value={"all"}>
                <em>All</em>
              </MenuItem>
              <MenuItem value={"pizza"}>Pizza</MenuItem>
              <MenuItem value={"panzeroti"}>Panzzeroti</MenuItem>
              <MenuItem value={"lasagna"}>Lasagna</MenuItem>
              <MenuItem value={"desgranados"}>Desgranados</MenuItem>
              <MenuItem value={"bebidas"}>Bebidas</MenuItem>
            </Select>
          </FormControl>
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
                      },
                    },
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
      <ProductsModal openModal={openModal} handleCloseModal={handleCloseModal} ingredientes={ingredientes} />
    </div>
  );
};

export default AdminProductsGrid;
