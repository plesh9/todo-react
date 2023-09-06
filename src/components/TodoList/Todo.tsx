import { Box, Button, List, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import { useAppSelector } from '../../app/hooks';
import { useTask } from '../../hooks/useTask';
import FiltersTodo from './FiltersTodo';
import NoTasks from './NoTasks';
import TaskTodo from './TaskTodo';

type PropsType = {
    title: string
}

function Todo({ title }: PropsType) {
    const { taskInputText, filterTasks, tasks } = useAppSelector(state => state.todos)
    const { handleAddTask, onChangeInputTaskText } = useTask()

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Box className="to-do__item" display="flex" flexDirection="column">
                <Typography variant="h6" fontWeight={500} component="h2">
                    {title}
                </Typography>
                <Box display={'flex'} alignItems='flex-end' columnGap={3} mt={2}>
                    <TextField
                        fullWidth
                        label="New task"
                        variant="standard"
                        size="small"
                        value={taskInputText}
                        onChange={e => onChangeInputTaskText(e.target.value)}
                    />
                    <Button
                        className='to-do__btn'
                        variant="contained"
                        size="small"
                        onClick={handleAddTask}
                        disabled={!taskInputText}
                    >
                        add
                    </Button>
                </Box>
                {filterTasks.length
                    ?
                    <List className="to-do__list">
                        {filterTasks.map(task => <TaskTodo task={task} key={task.id} />)}
                    </List>
                    :
                    <NoTasks />
                }
                {tasks.length ? <FiltersTodo /> : ''}
            </Box>
        </Grid>
    )
}

export default Todo;