import React, { Component } from 'react';
import Globalization from '../../../helpers/Globalization';
import { InputAdornment , Container, Box, Paper, makeStyles, Typography, Link, FormControl, TextField, Input, InputLabel, Button } from '@material-ui/core';
import { PermIdentity, LockOpen } from '@material-ui/icons';

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
    chatroomlink: {
        padding: 20,
        textAlign: "center",
    }
});

export default function Login() {
    var classes = useStyles();
    return (
        <Container maxWidth="sm">
            <Paper className={classes.root} elevation={0}>
                <Typography variant="h4" align="center">
                    {Globalization.GetString("Login")}
                </Typography>
                <Box>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="username">{Globalization.GetString("Username")}</InputLabel>
                        <Input id="username" fullWidth={true} placeholder={Globalization.GetString("Type your username")}
                            startAdornment={
                                <InputAdornment position="start">
                                    <PermIdentity />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="password">{Globalization.GetString("Password")}</InputLabel>
                        <Input id="password" type="password" fullWidth={true} placeholder={Globalization.GetString("Type your password")}
                            startAdornment={
                                <InputAdornment position="start">
                                    <LockOpen />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Button>Login</Button>
                </Box>
            </Paper>
        </Container>
    );
};