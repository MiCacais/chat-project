import React, { useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import classes from './RoomsList.module.css';

const RoomsList = props => {

  const roomCtx = useContext(AuthContext);

  const setRoomCtx = roomId => {
    roomCtx.setRoomId(roomId);
  };

  return (
    <ul className={classes['rooms-list']}>
      {props.rooms.map((room) => (
        <li key={room.id}>
          <button type='button' onClick={() => setRoomCtx(room.id)}>
            {room.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default RoomsList;
