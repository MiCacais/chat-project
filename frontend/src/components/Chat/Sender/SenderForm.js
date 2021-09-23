import React, { useState, useContext } from 'react';
import AuthContext from '../../../store/auth-context';

const SenderForm = props => {

  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setValid] = useState(true);

  const roomCtx = useContext(AuthContext);

  const inputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setValid(false);
      return;
    }
    fetch('http://localhost:3000/messages', {
      method: 'POST',
      body: JSON.stringify({
        content: enteredValue,
        uid: roomCtx.token,
        room_id: roomCtx.roomId,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input type="text" onChange={inputChangeHandler} />
      <button type="submit">Send</button>
      {!isValid && <p>Empty message</p>}
    </form>
  );
};

export default SenderForm;
