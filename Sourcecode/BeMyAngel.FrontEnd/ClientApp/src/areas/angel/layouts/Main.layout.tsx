import React from 'react';
import Globalization from '../../../helpers/Globalization';
import { Button, Container, Box, AppBar, Toolbar, Typography, Link, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Logo from '../../../resources/images/be_my_angel.svg'
import AuthorizationContext from '../../../helpers/Authorization'

const useStyles = makeStyles((theme: Theme) => ({
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

export default function MainLayout(props: any) {
    const classes = useStyles();

    function doLogout(){
      AuthorizationContext.Logout();
      window.location.reload();
    }

    function getAuthenticationArea(){
        return AuthorizationContext.IsLogged() 
                ? <Button color="inherit" onClick={() => doLogout()}>{Globalization.GetString('Sair')}</Button>
                : <Button color="inherit" href={"/angel/login"} >{Globalization.GetString('Login')}</Button>
    }
        
    return <div className={classes.root}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <Box className={classes.menuButton} color="inherit" aria-label="menu">
                            <Link href={"/"}>
                                <img src={Logo} alt="Logo"/>
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