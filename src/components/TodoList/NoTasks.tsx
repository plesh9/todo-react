import { Box, Typography } from '@mui/material'

type NoTaskProp = {
    title?: string
}

function NoTasks({ title }: NoTaskProp) {
    return (
        <Box
            className='to-do__empty'
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{ flex: '1 1 auto'}}
        >
            <Typography>{title || "No tasks"}</Typography>
        </Box>
    )
}

export default NoTasks