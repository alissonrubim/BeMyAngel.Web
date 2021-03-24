import React, { useState } from 'react';
import Globalization from '../../../helpers/Globalization';
import { Button, Container, Box, Paper, makeStyles, Typography, Link, Drawer } from '@material-ui/core';
import AuthService from '../../../services/AuthService'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 40,
        color: theme.palette.common.white
    },
    drawer_bottom: {
        '& .MuiDrawer-paper': {
            borderRadius: "15px 15px 0px 0px"
        }
    },
    drawer_contents: {
        padding: 40,
        height: "85vh",
        borderRadius: "15px 15px 0px 0px"
    },
    title: {
        paddingBottom: 50,
        textAlign: "center"
    },
    button: {
        marginTop: 40,
        textAlign: "center",
    }
}));

enum Stages {
    Presentation,
    ChatForm
}

export default function Home() {
    const classes = useStyles();

    const [stage, setStage] = useState<Stages>(Stages.Presentation);
    const authService = new AuthService();

    function startChat(){
      authService.LoginAsAnonymous();
    }

    return (
        <>
            <Container maxWidth="sm" className={classes.root}>
                <Box className={classes.title}>
                    <Typography variant="h4">
                        {Globalization.GetString('BeMyAngel')}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5">
                        {Globalization.GetString('Do you need talk with someone?')}
                    </Typography>
                </Box>
                <Box className={classes.button}>
                    <Button color="secondary" variant="contained" size="large" fullWidth={true} onClick={() => setStage(Stages.ChatForm)}>Get Started</Button>
                </Box>
            </Container>

            <Drawer anchor="bottom" open={stage == Stages.ChatForm} className={classes.drawer_bottom}>
                <Container maxWidth="sm" className={classes.drawer_contents}>
                    <Box>
                        <Typography variant="h5">
                            {Globalization.GetString('How do you fell right now?')}
                        </Typography>
                    </Box>
                    <Button color="primary" variant="contained" size="large" fullWidth={true} onClick={() => startChat()}>Start a chat</Button>
                </Container>
            </Drawer>
        </> 
    );
};