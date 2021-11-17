import React, { useEffect, useState } from 'react';
import { Container, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Chat from 'areas/main/components/Chat';
import ChatPresentation from 'presentations/Chat.presentation';
import BeMyAngelApi from 'gateways/BeMyAngelApi';
import ChatEventPresentation from 'presentations/ChatEvent.presentation';

const useStyles = makeStyles((theme: Theme) => ({
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
    function getChatEvents(chatInfo: ChatPresentation){
      Api.ChatEvent_GetAll(chatInfo.chat.chatId).then((ChatEvents: ChatEventPresentation[]) => {
        chatInfo.chatEvents = ChatEvents;
        setChatInfo(chatInfo);
      });
    }

    if(!chatInfo){
      if(ChatId){
        Api.Chat_Get(ChatId).then((chatInfo: ChatPresentation) => {
          getChatEvents(chatInfo);
        })
      }
      else{
        Api.Chat_GetCurrent().then((chatInfo: ChatPresentation) => {
          if(chatInfo.chat === null){
            Api.Chat_Create().then((chatInfo: ChatPresentation) => {
            getChatEvents(chatInfo);
            })
          }else{
            getChatEvents(chatInfo);
          }
        })
      }
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