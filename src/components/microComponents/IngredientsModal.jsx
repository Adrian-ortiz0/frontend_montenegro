import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import axiosInstance from "../../AxiosConfiguration";

const IngredientsModal = ({ handleCloseSubModal, subModals, getIngredients }) => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/admin/ingredient", formData);
      console.log(response.status);
      alert("Ingrediente añadido con exito!");
      setFormData({ name: "" });
      getIngredients();
    } catch (error) {
      console.error("Error sending ingredient", error);
    }
  };

  return (
    <Modal open={subModals} onClose={() => handleCloseSubModal("ingredientes")}>
      <Box
        className="box_modal"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "50%",
          width: "30%",
          bgcolor: "#252525",
          border: "1px solid #00000016",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6">Agregar Ingrediente</Typography>
        <form action="" className="ingredientes_form" onSubmit={handleSubmit}>
          <div className="products_form-inputGroup">
            <label htmlFor="ingrediente">Nuevo ingrediente:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Añadir</button>
        </form>
      </Box>
    </Modal>
  );
};

export default IngredientsModal;
