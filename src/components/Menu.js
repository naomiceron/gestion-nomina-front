import React, {Component} from 'react';
import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import { Menu } from '@material-ui/icons';
//import { render } from '@testing-library/react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class ButtonAppBar extends Component {
  cerrarSesion=()=>{
    cookies.remove('id', {path: "/"});
    cookies.remove('nombre', {path: "/"});
    cookies.remove('correo', {path: "/"});
    alert('Adios');
    window.location.href='./';
  }
  componentDidMount(){
    if(!cookies.get('correo')){
        window.location.href="./"; 
    }
}
  render(){
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit" onClick={()=>this.cerrarSesion()}>Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
    ); 
  }
}
export default ButtonAppBar;
