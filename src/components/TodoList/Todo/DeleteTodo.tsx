import { Button } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import { useTodo } from '../../../hooks/useTodo';

function DeleteTodo({ todoId }: { todoId: string }) {
    const { handleRemoveTodo } = useTodo()

    return (
        <Button
            style={{
                position: "absolute",
                right: "6px",
                top: "6px",
                minWidth: "auto",
                borderRadius: "50%",
                padding: "6px"
            }}
            onClick={() => handleRemoveTodo(todoId)}
        >
            <ClearIcon />
        </Button>
    )
}

export default DeleteTodo