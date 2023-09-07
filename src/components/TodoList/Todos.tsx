import { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { Box, Container } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { useTodo } from '../../hooks/useTodo';
import Todo from './Todo/Todo';
import NewTodo from './Todo/NewTodo';
import NoTodos from './Todo/NoTodos';

function Todos() {
  const { todos } = useAppSelector(state => state.todoList)
  const { setTodos } = useTodo()

  useEffect(() => {
    setTodos()
  }, [])

  return (
    <Box component="section">
      <Container maxWidth="xl">
        <NewTodo />
        {todos.length
          ?
          <Grid container spacing={3} mt={4}>
            {todos.map((todo) => (
              <Todo todo={todo} key={todo.todoId} />
            ))}
          </Grid>
          :
          <NoTodos />
        }
      </Container>
    </Box>
  );
}

export default Todos;
