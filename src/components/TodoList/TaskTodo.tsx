import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { TaskType } from './Todo';
import { removeTask } from '../../features/taskSlise';
import { useAppDispatch } from '../../app/hooks';

type PropsTaskType = {
  task: TaskType
}

function TaskTodo({ task }: PropsTaskType) {
  const dispatch = useAppDispatch();

  const handleRemoveTask = () => {
    dispatch(removeTask({ taskId: task.id }));
  }

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={handleRemoveTask}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
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
