import { Box, Button, TextField } from '@mui/material'
import { useTodo } from '../../../hooks/useTodo'
import { TodoType } from '../../../Types/Types'

function NewTask({ todo }: { todo: TodoType }) {
    const { handleAddTask, onChangeInputTaskText, onKeyDownInputTask } = useTodo()

    return (
        <Box display="flex" alignItems="flex-end" columnGap={3} mt={2}>
            <TextField
                fullWidth
                label="New task"
                variant="standard"
                size="small"
                value={todo.taskInputText}
                onChange={e => onChangeInputTaskText(e.target.value, todo.todoId)}
                onKeyDown={e => onKeyDownInputTask(e.code, todo.todoId)}
            />
            <Button
                className="to-do__btn"
                variant="contained"
                size="small"
                onClick={() => handleAddTask(todo.todoId)}
                disabled={!todo.taskInputText.trim()}
            >
                add
            </Button>
        </Box>
    )
}

export default NewTask