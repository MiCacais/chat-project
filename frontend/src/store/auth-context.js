import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  roomId: null,
  userId: null,
  setRoomId: (roomId) => {},
  login: (token, userId) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);
  const [userId, setUserId] = useState(null);
  const [roomId, setRoomId] = useState(null);

  const setRoomHandler = (roomId) => {
    setRoomId(roomId);
  };

  const userIsLoggedIn = !!token;

  const loginHandler = (token, userId) => {
    setToken(token);
    setUserId(userId);
    localStorage.setItem('token', token);
  };

  const logoutHandler = () => {
    setToken(null);
    setRoomId(null);
    localStorage.removeItem('token');
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    roomId: roomId,
    setRoomId: setRoomHandler,
    userId: userId,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
