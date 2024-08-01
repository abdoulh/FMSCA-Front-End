import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 , marginBottom : 10 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ height: 40 }} />
            <Typography variant="h6" color="inherit" component="div" sx={{ ml: 2 }}>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
