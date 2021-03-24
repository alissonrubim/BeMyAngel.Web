import React from 'react';
import Globalization from '../../../helpers/Globalization';
import { Button, Container, Box, Paper, makeStyles, AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import Logo from '../../../resources/images/be_my_angel.svg'

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

/***********************DELETAR!~!! */
export default function Layout(props: any) {
    const classes = useStyles();
        
    return <div className={classes.root}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <Box className={classes.menuButton} color="inherit" aria-label="menu">
                            <Link href={"/"}>
                                <img src={Logo}/>
                            </Link>
                        </Box>
                        <Typography variant="h6" className={classes.title}>
                            Be My Angel
                        </Typography>
                        <Button color="inherit" href="/angel">{Globalization.GetString('Ir Pra Área do Anjo')}</Button>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="xl">
                    {props.children}
                </Container>
            </div>;
};