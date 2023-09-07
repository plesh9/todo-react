import { Container, Typography, Box, TextField, Button } from '@mui/material';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';

function Header() {
    return (
        <Box component="header" mt={5}>
            <Container maxWidth="xl">
                <Typography variant="h4" component="h1" fontWeight={700} align="center">
                    Todo list
                </Typography>
                <Typography align="center" color="#ccc" mt={1}>
                    [React, Redux Toolkit, Typescript, Material UI]
                </Typography>
            </Container>
        </Box>
    )
}

export default Header