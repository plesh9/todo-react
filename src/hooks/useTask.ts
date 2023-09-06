import { addTask, removeTask, setFilterType, setIsDone, setTaskText } from '../features/todosSlise';
import { FilterValuesType } from '../Types/Types';
import { useAppDispatch } from './../app/hooks';

export const useTask = () => {
  const dispatch = useAppDispatch();

  const handleAddTask = () => {
    dispatch(addTask())
  }

  const onChangeInputTaskText = (taskInputText: string) => {
    dispatch(setTaskText({ taskInputText }))
  }

  const handleRemoveTask = (taskId: number) => {
    dispatch(removeTask({ taskId }))
  }

  const handleSetIsDone = (taskId: number) => {
    dispatch(setIsDone({ taskId }))
  }

  const handleSetFilterType = (filterType: FilterValuesType) => {
    dispatch(setFilterType({ filterType }))
  }

  return { handleRemoveTask, handleAddTask, onChangeInputTaskText, handleSetIsDone, handleSetFilterType }
}