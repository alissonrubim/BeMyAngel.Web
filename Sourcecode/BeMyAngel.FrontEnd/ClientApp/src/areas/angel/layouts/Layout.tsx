import React from 'react';
import Globalization from '../../../helpers/Globalization';
import { Button, Container, Box, Paper, makeStyles, AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import Logo from '../../../resources/images/be_my_angel.svg'
import AuthorizonContext from '../../../helpers/Authorization'
import { Redirect } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      '& img': {
            width: 36
        }
    },
    title: {
      flexGrow: 1,
    },
}));

export default function Layout(props: any) {
    const classes = useStyles();

    function getAuthenticationArea(){
        return AuthorizonContext.isLogged() 
                ? <Button color="inherit">{Globalization.GetString('Sair')}</Button>
                : <Button color="inherit">{Globalization.GetString('Login')}</Button>
    }
        
    return <div className={classes.root}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <Box className={classes.menuButton} color="inherit" aria-label="menu">
                            <Link href={"/"}>
                                <img src={Logo}/>
                            </Link>
                        </Box>
                        <Typography variant="h6" className={classes.title}>
                            Be My Angel - {Globalization.GetString('Aréa do Anjo')}
                        </Typography>
                        {getAuthenticationArea()}
                    </Toolbar>
                </AppBar>
                <Container maxWidth="xl">
                    {props.children}
                </Container>
            </div>;
};

interface LayoutProps {
    children?: any
    
}