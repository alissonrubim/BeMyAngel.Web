import React from 'react';
import { makeStyles } from '@mui/styles';
import SessionContext from 'helpers/Session';
import AuthorizationContext from 'helpers/Authorization';

const useStyles = makeStyles({
  debugPanel: {
    position: "absolute",
    backgroundColor: "#e6e6e6e0",
    padding: 10,
    bottom: 0,
    left: 0,
    fontSize: 12
  }
});


export default function MainLayout(props: any) {    
  const classes = useStyles();

  function getDebugPanel(){
    return (<>
      <div>{`SessionToken: ${SessionContext.GetCurrentToken()}`}</div>
      <div>{`IsLogged: ${AuthorizationContext.IsLogged() ? "Yes" : "No"}`}</div>
    </>);
  }

  return (
    <>
      {props.children}
      <div className={classes.debugPanel}>{getDebugPanel()}</div>
    </>
  );
};