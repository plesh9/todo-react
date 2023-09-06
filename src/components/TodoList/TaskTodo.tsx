import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useTask } from '../../hooks/useTask';
import { TaskType } from '../../Types/Types';

type PropsTaskType = {
  task: TaskType
}

function TaskTodo({ task }: PropsTaskType) {
  const { handleRemoveTask, handleSetIsDone } = useTask()

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveTask(task.id)}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
      onClick={() => handleSetIsDone(task.id)}
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
