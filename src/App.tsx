import { Container, Typography } from '@mui/material';
import Todos from './components/TodoList/Todos';
import './scss/index.scss';

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Typography variant="h4" component="h1" fontWeight={700} mt={5} align='center'>
          To do list
        </Typography>
        <Todos />
      </Container>
    </div>
  );
}

export default App;
