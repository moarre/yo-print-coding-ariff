import { Box, Container } from '@mui/material';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
    return (
        <Box sx={{ py: 4 }}>
            <Container maxWidth="md">
                <Outlet />
            </Container>
        </Box>
    );
};

export default Layout;
