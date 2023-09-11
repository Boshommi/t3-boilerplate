import React from 'react';
import { Button as MuiButton, type ButtonProps } from '@mui/material';

const Button: React.FC<ButtonProps> = (props) => {
    return <MuiButton {...props} sx={{}} />;
};

export default React.memo(Button);
