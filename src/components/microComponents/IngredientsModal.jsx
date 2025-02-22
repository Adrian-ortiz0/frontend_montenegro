import { Box, Modal, Typography, TextField, Button } from "@mui/material";
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
      alert("Ingrediente añadido con éxito!");
      setFormData({ name: "" });
      getIngredients();
    } catch (error) {
      console.error("Error sending ingredient", error);
    }
  };

  return (
    <Modal open={subModals} onClose={() => handleCloseSubModal("ingredientes")}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "70%", md: "30%" },
          bgcolor: "#252525",
          border: "1px solid #00000016",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" color="white" gutterBottom>
          Agregar Ingrediente
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nuevo ingrediente"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            InputLabelProps={{ style: { color: "white" } }}
            inputProps={{ style: { color: "white" } }}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Añadir
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default IngredientsModal;
