import { Box, List, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import { FilterValuesType, TodoType } from '../../../Types/Types';
import FilterTaskBtns from '../Task/FilterTaskBtns';
import NoTasks from '../Task/NoTasks';
import Task from '../Task/Task';
import NewTask from '../Task/NewTask';
import DeleteTodo from './DeleteTodo';

function Todo({ todo }: { todo: TodoType }) {

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Box className="to-do__item" display="flex" flexDirection="column" position="relative">
                <DeleteTodo todoId={todo.todoId} />
                <Typography variant="h6" fontWeight={500} component="h2">
                    {todo.title}
                </Typography>
                <NewTask todo={todo} />
                {todo.filterTasks.length
                    ?
                    <List className="to-do__list">
                        {todo.filterTasks.map(task => <Task task={task} todoId={todo.todoId} key={task.id} />)}
                    </List>
                    :
                    <NoTasks />
                }
                {todo.tasks.length ? <FilterTaskBtns filterType={todo.filterType as FilterValuesType} todoId={todo.todoId} /> : ''}
            </Box>
        </Grid>
    )
}

export default Todo;