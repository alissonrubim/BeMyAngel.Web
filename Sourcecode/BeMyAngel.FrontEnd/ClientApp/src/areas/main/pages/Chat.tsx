import React, { useState } from 'react';
import Globalization from '../../../helpers/Globalization';
import { Button, Container, Box, Paper, makeStyles, Typography, Link, Drawer, FormControl, FilledInput, IconButton, InputAdornment, InputLabel, Input, OutlinedInput } from '@material-ui/core';
import ChatEvent from '../components/ChatEvent';
import { EventTypes } from '../../../models/ChatRoomEventTypeModel';
import { Send } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    height: "100vh",
    backgroundColor: theme.palette.common.white
  }
}));

export default function Chat() {
  const classes = useStyles();

  const [message, setMessage] = useState<string>("");

  const chatRoom = {
    ChatRoomId: 1,
    Events: [{
      ChatRoomEventType: {
        ChatRoomEventTypeId: 1,
        Identifier: EventTypes.SEND_MESSAGE
      },
      PersonId: 1,
      DataTime: new Date(),
      EventData: `{"Message": "Oi Fulado, em que posso lhe ajudar?"}`
    },{
      ChatRoomEventType: {
        ChatRoomEventTypeId: 1,
        Identifier: EventTypes.SEND_MESSAGE
      },
      PersonId: 2,
      DataTime: new Date(),
      EventData: `{"Message": "Oi, preciso de ajuda. Estou muito triste, nao sei o que fazer."}`
    },
    {
      ChatRoomEventType: {
        ChatRoomEventTypeId: 1,
        Identifier: EventTypes.SEND_MESSAGE
      },
      PersonId: 1,
      DataTime: new Date(),
      EventData: `{"Message": "Certo, quer me falar mais do que voce esta sentindo?"}`
    },
    {
      ChatRoomEventType: {
        ChatRoomEventTypeId: 1,
        Identifier: EventTypes.TYPING_MESSAGE
      },
      PersonId: 1,
      DataTime: new Date(),
    }]
  };

  function sendMessage(){
    chatRoom.Events.push({
      ChatRoomEventType: {
        ChatRoomEventTypeId: 1,
        Identifier: EventTypes.SEND_MESSAGE
      },
      PersonId: 2,
      DataTime: new Date(),
      EventData: `{"Message": "`+ message +`"}`
    })
  }
      
  return (
      <>
        <Container maxWidth="sm" className={classes.root}>
          <Box>
            {chatRoom.Events.map((event) => 
              <ChatEvent event={event}></ChatEvent>
            )}
          </Box>
          <Box>
            <FormControl variant="outlined" fullWidth={true}>
              <OutlinedInput id="message" type='text' multiline={true} placeholder="Type something" value={message} onChange={(e) => setMessage(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="Send message" edge="end" onClick={() => sendMessage()}>
                      <Send />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
        </Container>
      </> 
  );
};

/*import { Container, Paper, Box, Button, makeStyles, TextField, Typography, FormControl } from '@material-ui/core';
import React, { Component, useState } from 'react';
import Globalization from '../../../helpers/Globalization';
import Chat from './Chat';
import ChatConfiguration from '../../../models/ChatConfiguration';

const useStyles = makeStyles({
    root: {
        padding: 20,
        marginTop: 20
    },
    title: {
        textAlign: "center"
    },
    logo: {
        textAlign: "center",
        padding: 20,
        '& img': {
            width: 70
        }
    },
    chatroomlink: {
        padding: 5,
        textAlign: "center",
    }
});

export default function ChatRoom() {
    const classes = useStyles();

    const [state, setState] = useState<ChatConfiguration>({
        PatientName: undefined,
        PatientFeeling: undefined,
    });

    const [ready, setReady] = useState<boolean>(false);

    const subpage = {
        FeelingForm: function(){
            function ChooseFeeling(Feeling: string){
                setState({...state, PatientFeeling: Feeling})
            }

            return (
                <>
                    <Box className={classes.title}>
                        <h1>Be My Angel</h1>
                    </Box>
                    <p>{Globalization.GetString('Antes, precisamos entender um pouco o que você está sentindo.')}</p>
                    <Box className={classes.chatroomlink}>
                        <Button variant="contained" color="primary" fullWidth onClick={() => ChooseFeeling(Globalization.GetString('Me sinto sozinho'))}>{Globalization.GetString('Me sinto sozinho')}</Button>
                    </Box>
                    <Box className={classes.chatroomlink}>
                        <Button variant="contained" color="primary" fullWidth onClick={() => ChooseFeeling(Globalization.GetString('Me sinto estressado'))}>{Globalization.GetString('Me sinto estressado')}</Button>
                    </Box>
                    <Box className={classes.chatroomlink}>
                        <Button variant="contained" color="primary" fullWidth onClick={() => ChooseFeeling(Globalization.GetString('Me sinto muito triste'))}>{Globalization.GetString('Me sinto muito triste')}</Button>
                    </Box>
                    <Box className={classes.chatroomlink}>
                        <Button variant="contained" color="primary" fullWidth onClick={() => ChooseFeeling(Globalization.GetString('Quero morrer'))}>{Globalization.GetString('Quero morrer')}</Button>
                    </Box>
                    <Box className={classes.chatroomlink}>
                        <Button variant="contained" color="primary" fullWidth onClick={() => ChooseFeeling(Globalization.GetString('Não sei explicar ou não está na lista'))}>{Globalization.GetString('Não sei explicar ou não está na lista')}</Button>
                    </Box>
                </>
            );
        },

        NameForm: function(){
            return (
                <>
                    <Typography>
                        {Globalization.GetString('Para manter um contato mais humano, quer nos dizer seu nome?')}
                    </Typography>
                    <FormControl >
                        <TextField id="name" label="Nome" value={state.PatientName} variant="outlined" size="small" placeholder="Digite seu nome"/>
                    </FormControl>
                    <Box>
                        <Button variant="contained" color="primary" onClick={() => setReady(true)}>{Globalization.GetString('Entrar com meu nome')}</Button>
                    </Box>
                </>
            );
        },
    }

    let currentSubpage = <></>;
    if(state.PatientFeeling == null)
        currentSubpage = subpage.FeelingForm();
    else if(!ready)
        currentSubpage = subpage.NameForm();
    else if(ready)
        currentSubpage = <Chat />

    return (
        <Container maxWidth="md">
            <Paper className={classes.root} elevation={1}>
                {currentSubpage}
            </Paper>
        </Container>
    )
    
};*/