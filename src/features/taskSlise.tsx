import { createSlice, PayloadAction  } from "@reduxjs/toolkit"

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

interface initialState {
    tasks: TaskType[]
}

const initialState: initialState = {
    tasks: [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "React", isDone: false},
        {id: 3, title: "Rest", isDone: false},
    ]
}

const slice = createSlice({
    name: 'tasks',
    initialState, 
    reducers: {
        removeTask(state, action: PayloadAction<{ taskId: number }>) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.taskId)
        }
    }
})

export const { removeTask } = slice.actions; 

export default slice.reducer;
