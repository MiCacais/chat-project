import React, { useContext } from 'react';
import classes from './Chat.module.css';
import Rooms from './Rooms/Rooms';
import Messages from './Messages/Messages';
import actionCable from 'actioncable';
import Sender from './Sender/Sender';
import AuthContext from '../../store/auth-context';

const Chat = () => {
  const CableApp = {};

  CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable');

  const authCtx = useContext(AuthContext);

  const backToRoomsModeHandler = () => {
    authCtx.setRoomId(null);
  };
  
  return (
    <section className={classes.starting}>
      {authCtx.roomId ? 
        <div>
          <div className={classes.boxes}><Messages cableApp={CableApp} /></div>
          <div className={classes.boxes}><Sender /></div>
          <button type='button' onClick={backToRoomsModeHandler}>Back</button>
        </div>
        : <div><Rooms /></div>
      }
    </section>
  );
};

export default Chat;
