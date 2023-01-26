import React from 'react';
import { Typography, Box, Link } from '@mui/material';

const Footer = () => (
    <Box sx={{ p: 6 }} component="footer">
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    </Box>
);

export default Footer;
