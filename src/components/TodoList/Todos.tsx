import Grid from '@mui/material/Grid';
import { Box, Container } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import Todo from './Todo/Todo';
import NewTodo from './Todo/NewTodo';

function Todos() {
  const { todos } = useAppSelector(state => state.todoList)

  return (
    <Box component="section">
      <Container maxWidth="xl">
        <NewTodo />
        <Grid container spacing={3} mt={4}>
          {todos.map((todo) => (
            <Todo todo={todo} key={todo.todoId} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Todos;
