import React, { useState, useEffect, useCallback, useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import MessageList from './MessageList';
import classes from './Messages.module.css';

const Messages = props => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const roomCtx = useContext(AuthContext);

  const openChatConnection = useCallback(async () => {
    props.cableApp.room = props.cableApp.cable.subscriptions.create({
      channel: 'RoomChannel',
      room: roomCtx.roomId,
      uid: roomCtx.token
    },
    {
      received: (updatedRoom) => {
        const data = updatedRoom.messages;
        const transformedData = data.map((messageData) => {
          return {
            id: messageData.id,
            content: messageData.content,
            user_id: messageData.user_id,
            user_name: messageData.user_name,
          };
        });
        setMessages(transformedData);
      }
    });
  }, []);

  useEffect(() => {
    openChatConnection();
  }, [openChatConnection]);

  const fetchMessagesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const url = 'http://localhost:3000/rooms/' + roomCtx.roomId;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      const transformedData = data.messages.map((messageData) => {
        return {
          id: messageData.id,
          content: messageData.content,
          user_id: messageData.user_id,
          user_name: messageData.user_name,
        };
      });
      setMessages(transformedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMessagesHandler();
  }, [fetchMessagesHandler]);

  let content = <p>No messages yet</p>;

  if (messages.length > 0) {
    content = <MessageList messages={messages}/>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <section className={classes.container}>
      {content}
    </section>
  );
};

export default Messages;
