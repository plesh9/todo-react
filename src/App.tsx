import Grid from '@mui/material/Grid';
import Todo from './components/TodoList/Todo';
import './scss/index.scss';
import { Box, Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';


function App() {
  const { tasks } = useSelector((state: RootState) => state.tasks)
  return (
    <div className="App">
      <Typography variant="h4" component="h1" fontWeight={700} mt={5} align='center'>
        To do list
      </Typography>
      <Box mt={5}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Todo title="Terminator" tasks={tasks} />
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default App;
