import { Box, Modal, Typography, TextField, Autocomplete, Button, Chip } from '@mui/material';
import React, { useState } from 'react';
import axiosInstance from '../../AxiosConfiguration';

const FlavorsModal = ({ handleCloseSubModal, subModals, ingredientes }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    ingredients: []
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleIngredientChange = (event, value) => {
    setFormData({
      ...formData,
      ingredients: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: formData.name,
      price: parseFloat(formData.price),
      ingredients: formData.ingredients.map((ingredient) => ingredient.id),
    };

    try {
      await axiosInstance.post('/admin/flavor', payload);
      alert('Sabor creado con éxito!');
      setFormData({ name: '', price: '', ingredients: [] });
    } catch (error) {
      console.error('Error al crear el sabor', error);
    }
  };

  return (
    <Modal open={subModals} onClose={() => handleCloseSubModal('sabor')}>
      <Box
        className="box_modal"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: '70%', md: '30%' },
          bgcolor: '#252525',
          border: '1px solid #00000016',
          boxShadow: 24,
          color: 'white',
          p: 4,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Crear Sabor
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre del Sabor"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            InputLabelProps={{ style: { color: 'white' } }}
            inputProps={{ style: { color: 'white' } }}
          />
          <TextField
            label="Precio"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            InputLabelProps={{ style: { color: 'white' } }}
            inputProps={{ style: { color: 'white' } }}
          />
          <Autocomplete
            multiple
            options={ingredientes}
            getOptionLabel={(option) => option.name}
            onChange={handleIngredientChange}
            value={formData.ingredients}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Ingredientes"
                placeholder="Selecciona ingredientes"
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                inputProps={{
                  ...params.inputProps,
                  style: { color: 'white' },
                }}
              />
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  key={option.id}
                  label={option.name}
                  {...getTagProps({ index })}
                  sx={{
                    color: 'white',
                    backgroundColor: '#555',
                  }}
                />
              ))
            }
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Crear Sabor
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default FlavorsModal;
