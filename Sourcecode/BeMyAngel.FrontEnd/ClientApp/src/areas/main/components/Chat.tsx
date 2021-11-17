import React, { useState, useEffect } from 'react';
import { Box, FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { Send } from '@mui/icons-material';

import ChatEvent from '../components/ChatEvent';
import ChatPresentation from 'presentations/Chat.presentation';
import ChatEventPresentation from 'presentations/ChatEvent.presentation';
import BeMyAngelChatHub from 'gateways/BeMyAngelChatHub';

export interface ChatProps {
  data: ChatPresentation,
  onPostMessage?: (message: string) => void; 
}

export default function Chat(props: ChatProps) {
  const [messageField, setMessageField] = useState<string>("");
  const [events, setEvents] = useState<ChatEventPresentation[]>(props.data.chatEvents);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const ChatHub = new BeMyAngelChatHub();
  const myChatSessionToken = props.data.myChatSessionToken;

  if(props.data == null){
    throw new Error("`props.data` must have a value");
  }

  function sendMessage(){
    if(props.onPostMessage != null)
      props.onPostMessage(messageField);
  }

  useEffect(() => {
    if(!setIsConnected || !isConnecting){
      ChatHub.OnConnected = () => {
        setIsConnected(true);
      }
      ChatHub.OnReceiveChatEvent = (senderSessionToken: string, chatEvent: ChatEventPresentation) => {

        /*********ARRUMAR A LISTA DE EVENTOS QUE NAO ESTA LINKANDO DIRETO TODO MUNDO */
        var newEvents = [...events, chatEvent];
        setEvents(newEvents)
      };
      ChatHub.Connect(myChatSessionToken);
      setIsConnecting(true);
    }
  }, [ChatHub, events, myChatSessionToken, isConnected, isConnecting]);

  return (
    <>
      <Box>
        {events.map((event: ChatEventPresentation) => 
          <ChatEvent 
            event={event} 
            myChatSessionToken={myChatSessionToken} 
            key={event.chatEventId} />
        )}
      </Box>
      <Box>
        <FormControl variant="outlined" fullWidth={true}>
          <OutlinedInput id="message" type='text' multiline={true} placeholder="Type something" value={messageField} onChange={(e) => setMessageField(e.target.value)}
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
    </> 
  );
};