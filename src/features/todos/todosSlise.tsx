import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';
import { FilterValuesType, TaskType, TodoType } from "../../Types/Types"



interface todosInitialState {
    todos: TodoType[];
    todoInputText: string;
}

const initialState: todosInitialState = {
    todos: [],
    todoInputText: '',
}

const findTodoById = (todos: TodoType[], todoId: string): TodoType | undefined => {
    return todos.find((t: TodoType) => t.todoId === todoId);
};

const slice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        setLocalTodos(state) {
            const localTodosJSON = localStorage.getItem("todos");
            const localTodos: TodoType[] = localTodosJSON ? JSON.parse(localTodosJSON) : []
            state.todos = localTodos
        },

        addTodo(state) {
            const todoInputText = state.todoInputText.trim();
            if (!todoInputText) return;

            const newTodo = {
                title: todoInputText,
                todoId: uuidv4(),
                tasks: [],
                filterTasks: [],
                filterType: 'all' as FilterValuesType,
                taskInputText: '',
            }

            state.todos = [newTodo, ...state.todos]
            state.todoInputText = ''
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },

        setTodoText(state, action: PayloadAction<{ todoInputText: string }>) {
            state.todoInputText = action.payload.todoInputText;
        },

        removeTodo(state, action: PayloadAction<{ todoId: string }>) {
            const filterTodos = state.todos.filter((todo) => todo.todoId !== action.payload.todoId);
            state.todos = filterTodos
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },

        addTask(state, action: PayloadAction<{ todoId: string }>) {
            const currentTodo = findTodoById(state.todos, action.payload.todoId);
            if (!currentTodo) return;

            const taskInputText = currentTodo.taskInputText.trim();
            if (!taskInputText) return;

            const newTask = {
                title: taskInputText,
                id: uuidv4(),
                isDone: false
            }

            currentTodo.tasks = [newTask, ...currentTodo.tasks];
            currentTodo.filterTasks = [newTask, ...currentTodo.filterTasks];
            currentTodo.taskInputText = '';
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },

        setTaskText(state, action: PayloadAction<{ taskInputText: string, todoId: string }>) {
            const currentTodo = findTodoById(state.todos, action.payload.todoId);
            if (!currentTodo) return;

            currentTodo.taskInputText = action.payload.taskInputText;
        },

        removeTask(state, action: PayloadAction<{ taskId: string, todoId: string }>) {
            const currentTodo = findTodoById(state.todos, action.payload.todoId);
            if (!currentTodo) return;

            const taskId = action.payload.taskId;
            currentTodo.tasks = currentTodo.tasks.filter((task) => task.id !== taskId);
            currentTodo.filterTasks = currentTodo.filterTasks.filter((task) => task.id !== taskId);
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },

        setIsDone(state, action: PayloadAction<{ taskId: string, todoId: string }>) {
            const currentTodo = findTodoById(state.todos, action.payload.todoId);
            if (!currentTodo) return;

            const taskId = action.payload.taskId;
            const toggleDone = (task: TaskType) => (
                task.id === taskId ? { ...task, isDone: !task.isDone } : task
            );

            currentTodo.tasks = currentTodo.tasks.map(toggleDone);
            currentTodo.filterTasks = currentTodo.filterTasks.map(toggleDone);
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },

        setFilterType(state, action: PayloadAction<{ filterType: FilterValuesType, todoId: string }>) {
            const currentTodo = findTodoById(state.todos, action.payload.todoId);
            if (!currentTodo) return;

            const filterType = action.payload.filterType
            currentTodo.filterType = filterType

            const isCompleted = (task: TaskType) => task.isDone === true;
            const isActive = (task: TaskType) => task.isDone === false;

            switch (filterType) {
                case "all":
                    currentTodo.filterTasks = [...currentTodo.tasks];
                    break;
                case "completed":
                    currentTodo.filterTasks = currentTodo.tasks.filter(isCompleted);
                    break;
                case "active":
                    currentTodo.filterTasks = currentTodo.tasks.filter(isActive);
                    break;
                default:
                    currentTodo.filterTasks = [...currentTodo.tasks];
                    break;
            }
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
    }
})


export const {
    setLocalTodos,
    addTodo,
    setTodoText,
    removeTodo,
    removeTask,
    addTask,
    setTaskText,
    setIsDone,
    setFilterType
} = slice.actions;

export default slice.reducer;
