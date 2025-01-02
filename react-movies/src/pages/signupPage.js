import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import PageTemplate from '../components/templateSignUpPage';
import Grid from "@mui/material/Grid2";
import { TextField,Button,Box } from "@mui/material";

const SignUpPage = (props) => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    //must have one capital letter one lower case one number and one special character
    const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegEx.test(password);

    if (validPassword && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  }

  if (registered) {
    return <Navigate to="/login" />;
  }

  //reference to TextField UI, https://mui.com/material-ui/react-text-field/
  return (
    <Grid container >
      <Grid style={{ margin: "auto" }}>
        <h2>Create an Account</h2>

        <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth 
      value={userName} 
      label="User Name" 
      onChange={e => {setUserName(e.target.value)}}
      />
    </Box>

    <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth 
      value={password} 
      label="Password" 
      onChange={e => {setPassword(e.target.value)}}
      />
    </Box>

    <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth 
      value={passwordAgain} 
      label="Password Again" 
      onChange={e => {setPasswordAgain(e.target.value)}}
      />
    </Box>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={register}
            style={{ marginTop: "20px" }}
          >
            Sign Up
          </Button>
    
      </Grid>
    </Grid>
  );
};



export default SignUpPage;
