import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';
import { FilterValuesType, TaskType } from "../Types/Types"

interface initialState {
    tasks: TaskType[],
    filterTasks: TaskType[],
    filterType: FilterValuesType | '',
    taskInputText: string
}

const initialState: initialState = {
    tasks: [],
    filterTasks: [],
    filterType: 'all',
    taskInputText: '',
}

const slice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask(state) {
            const { taskInputText } = state;

            if (!taskInputText) {
                return;
            }

            const newTask = {
                title: taskInputText,
                id: parseInt(uuidv4().substring(0, 8), 16),
                isDone: false
            }

            state.tasks = [newTask, ...state.tasks];
            state.filterTasks = [newTask, ...state.filterTasks];
            state.taskInputText = '';
        },

        setTaskText(state, action: PayloadAction<{ taskInputText: string }>) {
            state.taskInputText = action.payload.taskInputText;
        },

        removeTask(state, action: PayloadAction<{ taskId: number }>) {
            const taskId = action.payload.taskId;
            state.tasks = state.tasks.filter((task) => task.id !== taskId);
            state.filterTasks = state.filterTasks.filter((task) => task.id !== taskId);
        },

        setIsDone(state, action: PayloadAction<{ taskId: number }>) {
            const taskId = action.payload.taskId;
            const toggleDone = (task: TaskType) => (
                task.id === taskId ? { ...task, isDone: !task.isDone } : task
            );

            state.tasks = state.tasks.map(toggleDone);
            state.filterTasks = state.filterTasks.map(toggleDone);
        },

        setFilterType(state, action: PayloadAction<{ filterType: FilterValuesType }>) {
            const filterType = action.payload.filterType
            state.filterType = filterType
            const isCompleted = (task: TaskType) => task.isDone === true;
            const isActive = (task: TaskType) => task.isDone === false;

            switch (filterType) {
                case "all":
                    state.filterTasks = [...state.tasks];
                    break;
                case "completed":
                    state.filterTasks = state.tasks.filter(isCompleted);
                    break;
                case "active":
                    state.filterTasks = state.tasks.filter(isActive);
                    break;
                default:
                    state.filterTasks = [...state.tasks];
                    break;
            }
        },
    }
})


export const { removeTask, addTask, setTaskText, setIsDone, setFilterType } = slice.actions;

export default slice.reducer;
