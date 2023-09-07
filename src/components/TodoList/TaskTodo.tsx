import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useTodo } from '../../hooks/useTodo';
import { TaskType } from '../../Types/Types';

type PropsTaskType = {
  task: TaskType,
  todoId: string
}

function TaskTodo({ task, todoId }: PropsTaskType) {
  const { handleRemoveTask, handleSetIsDone } = useTodo()

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveTask(task.id, todoId)}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
      onClick={() => handleSetIsDone(task.id, todoId)}
    >
      <ListItemButton dense style={{ paddingLeft: 0 }}>
        <ListItemIcon>
          <Checkbox
            tabIndex={-1}
            disableRipple
            checked={task.isDone}
          />
        </ListItemIcon>
        <ListItemText primary={task.title} />
      </ListItemButton>
    </ListItem>
  );
}

export default TaskTodo;
