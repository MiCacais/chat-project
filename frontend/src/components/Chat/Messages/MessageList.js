import React from 'react';

const MessageList = props => {

  return (
    <ul>
      {props.messages.map((message) => (
        <li key={message.id}>
            <p>{message.user_name} says</p>
            <p>{message.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
