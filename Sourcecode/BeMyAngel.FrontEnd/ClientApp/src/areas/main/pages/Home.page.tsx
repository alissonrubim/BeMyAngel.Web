import React, { useState } from 'react';
import Globalization from 'helpers/Globalization';
import { Button, Container, Box, Typography, Drawer, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Redirect } from 'react-router';

import logoImage from 'resources/images/logo.png';

const useStyles = makeStyles((theme: Theme) => ({
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
  },
  appName: {
    fontWeight: 500,
    '& span': {
      fontWeight: 100
    }
  },
  appHomeMessage: {
    fontWeight: 300
  },
  logo:{
    textAlign: "center",
    '& img': {
      width: 120,
    }
  },
  angelAreaLink: {
    fontSize: 12
  }
}));

export default function HomePage() {
  enum Stages {
    Presentation,
    ChatForm,
    Chat
  }

  const classes = useStyles();
  const [stage, setStage] = useState<Stages>(Stages.Presentation);
  
  return (
    <>
      <Container maxWidth="sm" className={classes.root}>
        <Box className={classes.title}>
          <Typography variant="h4" className={classes.appName}>
            <span>BeMy</span>Angel
          </Typography>
        </Box>
        <Box className={classes.logo}>
          <img src={logoImage} alt="logo" />
        </Box>
        <Box>
          <Box>
            <Typography variant="h6" className={classes.appHomeMessage}>
              {Globalization.GetString('Do you need talk with someone? We are here to help you!')}
            </Typography>
          </Box>
          <Box className={classes.button}>
            <Button color="secondary" variant="contained" size="large" fullWidth={true} onClick={() => setStage(Stages.ChatForm)}>Get Started</Button>
          </Box>
          <Box className={classes.button}>
          <Typography variant="h6" className={classes.angelAreaLink}>
              {Globalization.GetString("Go to Angel Area")}
            </Typography>
          </Box>
        </Box>
      </Container>

      <Drawer anchor="bottom" open={stage === Stages.ChatForm} className={classes.drawer_bottom}>
        <Container maxWidth="sm" className={classes.drawer_contents}>
          <Box>
            <Typography variant="h5">
              {Globalization.GetString('How do you fell right now?')}
            </Typography>
          </Box>
          <Button color="primary" variant="contained" size="large" fullWidth={true} onClick={() => setStage(Stages.Chat)}>Start a chat</Button>
        </Container>
      </Drawer>

      {(stage === Stages.Chat) && <Redirect to="/chat" />}
    </> 
  );
};