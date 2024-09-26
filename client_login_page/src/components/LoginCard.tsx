import * as React from 'react';
import  Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';




export default function LoginCard() {

    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const handleLoginChange = (event) => {
      setLogin(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Login:', login);
      console.log('Password:', password);
    };


  return (
    <Card sx={{ maxWidth: 500, padding: 2, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom sx={{ mb: 2}}>
          Login
        </Typography>
        <Typography>
            Don't have an account?  
            <Link href="#" variant="body1"> Sign up </Link>
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email or Username"
            variant="outlined"
            value={login}
            onChange={handleLoginChange}
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
            <Link href="#" variant="body2">
              Sign up
            </Link>
          </Box>
          <CardActions>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Login
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
}