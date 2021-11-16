import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import ChatEventPresentation, { ChatEventTypes } from 'presentations/ChatEvent.presentation';
import Moment from 'moment';

const classNames = require('classnames');
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
    color: theme.palette.common.white
  },
  message: {
    marginBottom: 5,
    textAlign: 'left'
  },
  message_mine: {
    textAlign: 'right'
  },
  message_body: {
    fontSize: 15,
    backgroundColor: '#e2d8fd42',
    padding: 20,
    color: '#848282',       
    borderRadius: '25px 25px 25px 0px',
    textAlign: 'left',
    maxWidth: "80%",
    display: 'inline-flex',
  },
  message_body_mine: {
    borderRadius: '25px 25px 0px 25px',
    backgroundColor: '#5d29f2',
    color: 'white',
  },
  message_body_typping: {
    padding: "0px 5px"
  },
  message_time: {
    fontWeight: 300,
    fontSize: 12,
    color: '#848282',
    marginTop: 6,
  },
  message_time_mine: {
    textAlign: 'right',
  }
}));

export interface ChatEventProps {
  event: ChatEventPresentation,
  myChatSessionToken: string
}

/** 
  Render the Event for the chat. Each event will be rendered base on the EventType
**/
export default function ChatEvent(props: ChatEventProps) {
  const classes = useStyles();

  function RenderMessage(event: ChatEventPresentation, isMine: boolean){
    var eventData = JSON.parse(event.data!);

    var messageClasses = classes.message;
    var messageBodyClasses = classes.message_body;
    var messageTimeClasses = classes.message_time;

    if(isMine){
      messageClasses = classNames(classes.message, classes.message_mine)
      messageBodyClasses = classNames(classes.message_body, classes.message_body_mine)
      messageTimeClasses = classNames(classes.message_time, classes.message_time_mine)
    }

    return (
      <Box className={messageClasses}>
        <Box className={messageBodyClasses}>{eventData.Message}</Box>
        <Box className={messageTimeClasses}>{Moment(event.dataTime).format('hh:mm')}</Box>
      </Box>
    );
  }

  function RenderTypingMessage(event: ChatEventPresentation){
    var messageClasses = classes.message;
    var messageBodyClasses = classNames(classes.message_body, classes.message_body_typping);

    return (
      <Box className={messageClasses}>
        <Box className={messageBodyClasses}>
          <span className="spinme-left">
            <div className='spinner'><div className='bounce1'></div><div className='bounce2'></div><div className='bounce3'></div></div>
          </span>
        </Box>
      </Box>
    );
  }

  function isMine(){
    return props.event.chatSessionToken === props.myChatSessionToken;
  }

  if(props.event.chatEventTypeId === ChatEventTypes.PostMessage){
    return RenderMessage(props.event, isMine())
  }else if(props.event.chatEventTypeId === ChatEventTypes.IsTyping && !isMine()){
    return RenderTypingMessage(props.event)
  }

  return <></>;
};