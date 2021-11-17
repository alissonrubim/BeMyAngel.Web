import React, { useState } from 'react';
import Globalization from '../../../helpers/Globalization';
import { InputAdornment , Container, Box, Paper, Typography, FormControl, Input, InputLabel, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { PermIdentity, LockOpen } from '@mui/icons-material';
import AuthorizationContext from 'helpers/Authorization';

const useStyles = makeStyles({
    root: {
        padding: 20,
        marginTop: 20
    },
    logo: {
        textAlign: "center",
        padding: 20,
        '& img': {
            width: 70
        }
    },
    Chatlink: {
        padding: 20,
        textAlign: "center",
    }
});

export default function LoginPage() {
  var classes = useStyles();
  const [usernameField, setUsernameField] = useState<string>();
  const [passwordField, setPasswordField] = useState<string>();

  function doLogin(){
    AuthorizationContext.Login(usernameField!, passwordField!).then((logged: boolean) => {
      if(logged){
        window.location.href="/angel"
      }
    })
  }

  return (
    <Container maxWidth="sm">
      <Paper className={classes.root} elevation={0}>
        <Typography variant="h4" align="center">
          {Globalization.GetString("Login")}
        </Typography>
        <Box>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="username">{Globalization.GetString("Username")}</InputLabel>
            <Input id="username" fullWidth={true} value={usernameField} onChange={(e) => setUsernameField(e.target.value)} placeholder={Globalization.GetString("Type your username")}
              startAdornment={
                <InputAdornment position="start">
                  <PermIdentity />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="password">{Globalization.GetString("Password")}</InputLabel>
            <Input id="password" type="password" value={passwordField} onChange={(e) => setPasswordField(e.target.value)} fullWidth={true} placeholder={Globalization.GetString("Type your password")}
              startAdornment={
                <InputAdornment position="start">
                  <LockOpen />
                </InputAdornment>
              }
            />
          </FormControl>
          <Button onClick={() => doLogin()}>Login</Button>
        </Box>
      </Paper>
    </Container>
  );
};