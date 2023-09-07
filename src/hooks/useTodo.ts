import { addTask, addTodo, removeTask, removeTodo, setFilterType, setIsDone, setTaskText, setTodoText } from '../features/todos/todosSlise';
import { FilterValuesType } from '../Types/Types';
import { useAppDispatch } from '../app/hooks';

export const useTodo = () => {
  const dispatch = useAppDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo())
  }

  const onChangeInputTodoText = (todoInputText: string) => {
    dispatch(setTodoText({ todoInputText }))
  }

  const onKeyDownInputTodo = (key: string) => {
    if (key === "Enter") {
      dispatch(addTodo())
    }
  }

  const handleRemoveTodo = (todoId: string) => {
    dispatch(removeTodo({ todoId }))
  }

  const handleAddTask = (todoId: string) => {
    dispatch(addTask({ todoId }))
  }

  const onChangeInputTaskText = (taskInputText: string, todoId: string) => {
    dispatch(setTaskText({ taskInputText, todoId }))
  }

  const onKeyDownInputTask = (key: string, todoId: string) => {
    if (key === "Enter") {
      dispatch(addTask({ todoId }))
    }
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

  return {
    handleAddTodo,
    onChangeInputTodoText, 
    onKeyDownInputTodo,
    handleRemoveTodo,
    handleRemoveTask, 
    handleAddTask, 
    onChangeInputTaskText, 
    onKeyDownInputTask,
    handleSetIsDone, 
    handleSetFilterType 
  }
}