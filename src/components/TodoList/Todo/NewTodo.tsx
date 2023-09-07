import { Box, TextField, Button } from '@mui/material';
import { useAppSelector } from '../../../app/hooks';
import { useTodo } from '../../../hooks/useTodo';

function NewTodo() {
    const { todoInputText } = useAppSelector(state => state.todoList)
    const { onChangeInputTodoText, handleAddTodo, onKeyDownInputTodo } = useTodo()

    return (
        <Box
            display="flex"
            alignItems="flex-end"
            justifyContent="center"
            columnGap={2}
            maxWidth="600px"
            width="100%"
            margin="0 auto"
        >
            <TextField
                fullWidth
                label="New todo"
                variant="standard"
                size="small"
                onChange={e => onChangeInputTodoText(e.target.value)}
                onKeyDown={e => onKeyDownInputTodo(e.code)}
                value={todoInputText}
            />
            <Button
                className='to-do__btn'
                variant="contained"
                size="small"
                onClick={handleAddTodo}
                disabled={!todoInputText.trim()}
            >
                add
            </Button>
        </Box>
    )
}

export default NewTodo