import { TextField, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router';

const AdminLogin = () => {

  const navigate = useNavigate();

  return (
    <div className="login_container">
      <div className="login">
        <h2>Admin Login</h2>
        <div className="input_group">
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
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
            variant="outlined"
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
          onClick={() => navigate("../admin-dashboard")}
          variant="contained"
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
      </div>
    </div>
  );
};

export default AdminLogin;