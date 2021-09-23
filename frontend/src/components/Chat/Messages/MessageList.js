import React from 'react';

const MessageList = props => {

  return (
    <ul>
      {props.messages.map((message) => (
        <li key={message.id}>
            {message.content}
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
