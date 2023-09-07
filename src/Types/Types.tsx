export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

export type FilterValuesType = "all" | "completed" | "active"

export type TodoType = {
    title: string;
    todoId: string;
    tasks: TaskType[];
    filterTasks: TaskType[];
    filterType: FilterValuesType | '';
    taskInputText: string;
}