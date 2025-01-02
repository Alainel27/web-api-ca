import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import { TextField,Button,Box } from "@mui/material";

const LoginPage = props => {
    const context = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        context.authenticate(userName, password);
    };

    let location = useLocation();

    // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }

    return (
        <Grid container >
        <Grid style={{ margin: "auto" }}>
          <h2>Sign in Into Your Account</h2>

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

             <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={login}
                        style={{ marginTop: "20px" }}
                      >
                        Login
                      </Button>
      
        </Grid>
      </Grid>
        
    );
};

export default LoginPage;