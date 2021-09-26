import React, { useState, useEffect, useCallback } from 'react';
import RoomList from './RoomsList';
import classes from './Rooms.module.css';

const Rooms = props => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRoomsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3000/rooms');
      
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      const transformedData = data.map((roomsData) => {
        return {
          id: roomsData.id,
          title: roomsData.title,
        };
      });
      setRooms(transformedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchRoomsHandler();
  }, [fetchRoomsHandler]);

  let content = <p>Found no rooms</p>;

  if (rooms.length > 0) {
    content = <RoomList rooms={rooms} cableApp={props.cableApp}/>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <section className={classes.room}>
      <h2>Choose a room</h2>
      {content}
    </section>
  );
};

export default Rooms;
