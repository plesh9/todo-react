import { Box } from '@mui/material';
import Header from './components/Header/Header';
import Todos from './components/TodoList/Todos';
import './scss/index.scss';

function App() {
  return (
    <Box className="app">
      <Header />
      <Box mt={4} component="main">
        <Todos />
      </Box>
    </Box>
  );
}

export default App;
