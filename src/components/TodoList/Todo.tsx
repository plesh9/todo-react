import { Box, Button, List, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import TaskTodo from './TaskTodo';

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: TaskType[]
}

function Todo(props: PropsType) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Box className="to-do__item" display="flex" flexDirection="column">
                <Typography variant="h6" fontWeight={500} component="h2">
                    {props.title}
                </Typography>
                <Box display={'flex'} alignItems='flex-end' columnGap={3} mt={2}>
                    <TextField id="standard-basic" fullWidth label="task" variant="standard" size="small" />
                    <Button className='to-do__btn' variant="contained" size="small">add</Button>
                </Box>
                <List style={{ flex: '1 1 auto' }}>
                    {props.tasks.map(task => <TaskTodo task={task} key={task.id} />)}
                </List>
                <Box display="flex" alignItems="center" columnGap={1} justifyContent="flex-end" mt={2}>
                    <Button variant="contained" size="small">All</Button>
                    <Button variant="outlined" size="small">Active</Button>
                    <Button variant="outlined" size="small">Completed</Button>
                </Box>
            </Box>
        </Grid>
    )
}

export default Todo;