import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = props => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      {...props.button}
    >
      {props.title}
    </Button>
  );
}

export default CustomButton;