import './App.css'
import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography, List,ListItem,ListItemText,TextField, Divider, Box} from '@mui/material';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
  //color: theme.palette.getContrastText(purple[500]),
  //backgroundColor: white[500],
  color: 'inherit',
  fontSize: '17px',
  fontFamily: 'roboto',
  border: '1px solid black',
  '&:hover': {
    backgroundColor: 'inherit',
    border: '1px solid black',
  },
}));

function App() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  return (
    <div>
      
      <h1 className='mainheading' style={{textAlign: 'center'}}> CHAT ROOMS </h1>

    <Stack direction="row" justifyContent="space-around" alignItems="" spacing={2} >
      
<div style={{width: '50%', padding: "2% 4%"}}>
  <h1 style={{fontSize: "15px"}}> GUEST ID: 4364367374673 </h1>
  <Typography> Guest Name </Typography>


</div>

<div style={{width: "50%", padding: "2% 4%"}}>
  <h2> Join a Session </h2>
<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
     
        <TextField
          required
          id="outlined-required"
          label="Session Code"
          helperText="Take the code from the session admin to join"
        />
        <TextField
          id="outlined-read-only-input"
          label="Guest ID"
          defaultValue="4364367374673"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Guest Name"
          defaultValue="Guest Name"
          InputProps={{
            readOnly: true,
          }}
        />
       
      
      <Button variant="outlined"> Submit </Button>
    </Box>
        
</div>
    </Stack>

    </div>
  );
}

export default App;
