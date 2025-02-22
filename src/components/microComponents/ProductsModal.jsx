import React, { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import IngredientsModal from "./IngredientsModal";
import FlavorsModal from "./FlavorsModal";

const ProductsModal = ({ openModal, handleCloseModal, ingredientes, getIngredients }) => {
  const [subModals, setSubModals] = useState({
    ingredientes: false,
    sabor: false,
    producto: false,
  });

  const handleOpenSubModal = (modal) => {
    setSubModals({ ...subModals, [modal]: true });
  };

  const handleCloseSubModal = (modal) => {
    setSubModals({ ...subModals, [modal]: false });
  };

  return (
    <>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="box_modal"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#252525",
            border: "1px solid #00000016",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Seleccion una opción
          </Typography>
          <div className="products_modal-buttons">
            <button onClick={() => handleOpenSubModal("ingredientes")}>
              Agregar ingrediente
            </button>
            <button onClick={() => handleOpenSubModal("sabor")}>
              Crear sabor
            </button>
            <button onClick={() => handleOpenSubModal("producto")}>
              Crear producto
            </button>
          </div>
        </Box>
      </Modal>
      <IngredientsModal handleCloseSubModal={handleCloseSubModal} subModals={subModals.ingredientes} getIngredients={getIngredients} />
      <FlavorsModal handleCloseSubModal={handleCloseSubModal} subModals={subModals.sabor} ingredientes={ingredientes} />

      <Modal
        open={subModals.producto}
        onClose={() => handleCloseSubModal("producto")}
      >
        <Box
          className="box_modal"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "30%",
            height: "50%",
            bgcolor: "#252525",
            border: "1px solid #00000016",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6">Crear Producto</Typography>
          <p>Aquí va el contenido para crear un producto.</p>
        </Box>
      </Modal>
    </>
  );
};

export default ProductsModal;
