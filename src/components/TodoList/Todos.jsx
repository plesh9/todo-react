import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import Todo from './Todo';

function Todos() {
  const { todos } = useAppSelector(state => state.todoList)

  return (
    <Box mt={5}>
      <Grid container spacing={3}>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.todoId} />
        ))}
      </Grid>
    </Box>
  );
}

export default Todos;
