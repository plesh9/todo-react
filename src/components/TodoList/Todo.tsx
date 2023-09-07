import { Box, Button, List, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import { useTodo } from '../../hooks/useTodo';
import { FilterValuesType, TodoType } from '../../Types/Types';
import FiltersTodo from './FiltersTodo';
import NoTasks from './NoTasks';
import TaskTodo from './TaskTodo';

function Todo({ todo }: { todo: TodoType }) {
    const { handleAddTask, onChangeInputTaskText } = useTodo()

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Box className="to-do__item" display="flex" flexDirection="column">
                <Typography variant="h6" fontWeight={500} component="h2">
                    {todo.title}
                </Typography>
                <Box display={'flex'} alignItems='flex-end' columnGap={3} mt={2}>
                    <TextField
                        fullWidth
                        label="New task"
                        variant="standard"
                        size="small"
                        value={todo.taskInputText}
                        onChange={e => onChangeInputTaskText(e.target.value, todo.todoId)}
                    />
                    <Button
                        className='to-do__btn'
                        variant="contained"
                        size="small"
                        onClick={() => handleAddTask(todo.todoId)}
                        disabled={!todo.taskInputText.trim()}
                    >
                        add
                    </Button>
                </Box>
                {todo.filterTasks.length
                    ?
                    <List className="to-do__list">
                        {todo.filterTasks.map(task => <TaskTodo task={task} todoId={todo.todoId} key={task.id} />)}
                    </List>
                    :
                    <NoTasks />
                }
                {todo.tasks.length ? <FiltersTodo filterType={todo.filterType as FilterValuesType} todoId={todo.todoId} /> : ''}
            </Box>
        </Grid>
    )
}

export default Todo;