import { TextField, Button, styled } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import axiosInstance from '../AxiosConfiguration';

const AdminLogin = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = async (e) => {
     e.preventDefault();
    try{
      const response = await axiosInstance.post("/adminLogin", formData)
      console.log("Login exitoso", response.data);
      navigate("../admin-dashboard")
    } catch(error){
      console.error("Error en login", error);
      alert("Credenciales incorrectas, por favor intenta de nuevo")
    }
  }

  return (
    <div className="login_container">
      <form className="login" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        <div className="input_group">
          <TextField
            fullWidth
            label="Email"
            name='email'
            variant="outlined"
            onChange={handleChange}
            margin="normal"
            sx={{
              '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                '&.Mui-focused fieldset': { borderColor: '#1988d2' }
              },
              '& .MuiInputBase-input': { color: 'white' }
            }}
          />
          
          <TextField
            fullWidth
            label="Password"
            type="password"
            name='password'
            variant="outlined"
            onChange={handleChange}
            margin="normal"
            sx={{
              '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                '&.Mui-focused fieldset': { borderColor: '#198bd2' }
              },
              '& .MuiInputBase-input': { color: 'white' }
            }}
          />
        </div>
        
        <Button
          variant="contained"
          type='submit'
          fullWidth
          size="large"
          sx={{
            width: "90%",
            mt: 2,
            backgroundColor: '#1976d2',
            '&:hover': {
              backgroundColor: '#1565c0',
              transform: 'translateY(-1px)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default AdminLogin;