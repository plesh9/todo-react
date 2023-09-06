import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Todo from './components/TodoList/Todo';
import './scss/index.scss';

function App() {
  return (
    <div className="App">
      <Typography variant="h4" component="h1" fontWeight={700} mt={5} align='center'>
        To do list
      </Typography>
      <Box mt={5}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Todo title="Todo 1" />
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default App;
