import { Box, Typography } from '@mui/material';

function NoTodos() {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight="500px"
        >
            <Typography color="#ccc">
                Add your first todo
            </Typography>
        </Box>
    )
}

export default NoTodos