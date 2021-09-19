import React from 'react';
import TextField from '@mui/material/TextField';

const CustomInput = props => {
  return (
    <TextField
      required
      fullWidth
      autoFocus
      {...props.input}
    />
  );
}

export default CustomInput;