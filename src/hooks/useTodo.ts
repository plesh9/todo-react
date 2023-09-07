import { addTask, removeTask, setFilterType, setIsDone, setTaskText } from '../features/todos/todosSlise';
import { FilterValuesType } from '../Types/Types';
import { useAppDispatch } from '../app/hooks';

export const useTodo = () => {
  const dispatch = useAppDispatch();

  const handleAddTask = (todoId: string) => {
    dispatch(addTask({ todoId }))
  }

  const onChangeInputTaskText = (taskInputText: string, todoId: string) => {
    dispatch(setTaskText({ taskInputText, todoId }))
  }

  const handleRemoveTask = (taskId: string, todoId: string) => {
    dispatch(removeTask({ taskId, todoId }))
  }

  const handleSetIsDone = (taskId: string, todoId: string) => {
    dispatch(setIsDone({ taskId, todoId }))
  }

  const handleSetFilterType = (filterType: FilterValuesType, todoId: string) => {
    dispatch(setFilterType({ filterType, todoId }))
  }

  return { handleRemoveTask, handleAddTask, onChangeInputTaskText, handleSetIsDone, handleSetFilterType }
}