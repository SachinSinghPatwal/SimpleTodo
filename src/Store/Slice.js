import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: false,
  tasks: [
    {
      id: new Date(2025, 2, 8, 10, 0).toISOString(),
      text: "Buy groceries",
      completed: false,
      important: false,
    },
    {
      id: new Date(2025, 2, 8, 12, 30).toISOString(),
      text: "Finish project report",
      completed: false,
      important: true,
    },
    {
      id: new Date(2025, 2, 8, 15, 45).toISOString(),
      text: "Call the bank",
      completed: false,
      important: false,
    },
    {
      id: new Date(2025, 2, 9, 9, 0).toISOString(),
      text: "Schedule dentist appointment",
      completed: false,
      important: false,
    },
    {
      id: new Date(2025, 2, 9, 14, 15).toISOString(),
      text: "Plan weekend trip",
      completed: false,
      important: false,
    },
    {
      id: new Date(2025, 2, 10, 18, 30).toISOString(),
      text: "Read a book",
      completed: true,
      important: false,
    },
    {
      id: new Date(2025, 2, 10, 20, 0).toISOString(),
      text: "Clean the house",
      completed: true,
      important: false,
    },
    {
      id: new Date(2025, 2, 11, 8, 45).toISOString(),
      text: "Prepare presentation",
      completed: true,
      important: false,
    },
    {
      id: new Date(2025, 2, 11, 11, 20).toISOString(),
      text: "Update blog",
      completed: true,
      important: false,
    },
  ],
  detailedInfoVisibility: false,
  profileAndNavigationVisibilityToggle: true,
  tasksShowingType: "All Task",
  gridTaskList: false,
};

const slice = createSlice({
  name: "SingleSourceOfTruthSlice",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setTasks: (state, action) => {
      state.tasks.unshift(action.payload);
    },
    setDetailedInfoVisibility: (state, action) => {
      state.detailedInfoVisibility = action.payload;
    },
    removeTasks: (state, action) => {
      state.tasks = state.tasks.filter((each) => each.id !== action.payload);
    },
    updateCompletedTasks: (state, action) => {
      const { id, status } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, completed: status } : task
      );
    },
    updateImportantTasks: (state, action) => {
      const { id, status } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, important: status } : task
      );
    },
    setTasksShowingType: (state, action) => {
      state.tasksShowingType = action.payload;
    },
    setProfileAndNavigationVisibilityToggle: (state, action) => {
      state.profileAndNavigationVisibilityToggle = action.payload;
    },
    setGridTaskList: (state, action) => {
      state.gridTaskList = action.payload;
    },
  },
});

export default slice.reducer;

export const {
  setTheme,
  setTasks,
  setDetailedInfoVisibility,
  removeTasks,
  updateCompletedTasks,
  updateImportantTasks,
  setTasksShowingType,
  setProfileAndNavigationVisibilityToggle,
  setGridTaskList,
} = slice.actions;
