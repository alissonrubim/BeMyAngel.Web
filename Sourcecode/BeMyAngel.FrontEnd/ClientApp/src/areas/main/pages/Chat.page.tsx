import React, { useEffect, useState } from 'react';
import { Container, makeStyles } from '@material-ui/core';

import Chat from 'areas/main/components/Chat';
import ChatPresentation from 'presentations/Chat.presentation';
import BeMyAngelApi from 'gateways/BeMyAngelApi';
import ChatEventPresentation from 'presentations/ChatEvent.presentation';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    height: "100vh",
    backgroundColor: theme.palette.common.white
  }
}));

export interface ChatPageProps {
  ChatId: number;
}

export default function ChatPage(props: ChatPageProps) {
  const ChatId = props.ChatId;
  const classes = useStyles();
  const Api = new BeMyAngelApi();

  const [chatInfo, setChatInfo] = useState<ChatPresentation>();

  useEffect(() => {
    function getEvents(chatInfo: ChatPresentation){
      Api.ChatEvent_GetAll(chatInfo.chat.chatId).then((ChatEvents: ChatEventPresentation[]) => {
        chatInfo.chatEvents = ChatEvents;
        setChatInfo(chatInfo);
      });
    }

    if(ChatId){
      Api.Chat_Get(ChatId).then((chatInfo: ChatPresentation) => {
        getEvents(chatInfo);
      })
    }
    else{
      Api.Chat_GetCurrent().then((chatInfo: ChatPresentation) => {
        getEvents(chatInfo);
      })
    }
  }, [ChatId, Api]);

  function onPostMessage(message: string){
    if(chatInfo != null)
      Api.ChatEvent_PostMessage(chatInfo!.chat.chatId, message);
  }

  return (
    <Container maxWidth="sm" className={classes.root}>
      {chatInfo != null && 
        <Chat 
          data={chatInfo!}
          onPostMessage={onPostMessage}
        />
      }
    </Container> 
  );
};