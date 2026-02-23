import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { initialTasks } from "../../data/initialData";
import type { Task } from "../../types/types";

interface TaskState {
  items: Task[];
  currentTaskIndex: number;
  totalCompleted: number;
  totalEarned: number;
}

const initialState: TaskState = {
  items: initialTasks,
  currentTaskIndex: 0,
  totalCompleted: initialTasks.filter(task => task.isCompleted).length,
  totalEarned: initialTasks
  .filter(task => task.isCompleted)
  .reduce((sum, task) => sum + task.reward, 0)
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    completeTask: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      const task = state.items.find(t => t.id === taskId);

      if (task && !task.isCompleted){
        task.isCompleted = true;
        state.totalCompleted += 1;
        state.totalEarned += task.reward;
      }
    },
    uncompleteTask: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      const task = state.items.find(t => t.id === taskId);

      if (task && !task.isCompleted){
        task.isCompleted = false;
        state.totalCompleted -= 1;
        state.totalEarned -= task.reward;
      }
    },
    selectAnswer: (state, action: PayloadAction<{taskId: string, answerId: string}>) => {
      const {taskId, answerId} = action.payload;
      const task = state.items.find(t => t.id === taskId);

      if (task && task.options) {
        task.selectedAnswerId = answerId;

        const selectedOption = task.options.find(opt => opt.id === answerId);
        if (selectedOption){
          task.isAnswerCorrect = selectedOption.isCorrect;

          if (selectedOption.isCorrect && !task.isCompleted) {
            task.isCompleted = true;
            state.totalCompleted += 1;
            state.totalEarned += task.reward;
          }
        }
      }
    },
    nextTask: (state) => {
      if (state.currentTaskIndex < state.items.length - 1) {
        state.currentTaskIndex += 1;
      }
    },
    prevTask: state => {
      if (state.currentTaskIndex > 0) {
        state.currentTaskIndex -= 1;
      }
    },
    goToTask: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index > 0 && index < state.items.length){
        state.currentTaskIndex = index;
      }
    },
    goToTaskById: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      const index = state.items.findIndex(t => t.id === taskId);
      if (index !== -1) {
        state.currentTaskIndex = index;
      }
    },
    resetTasks: (state) => {
      state.items.forEach(task => {
        task.isCompleted = false;
        task.selectedAnswerId = undefined;
        task.isAnswerCorrect = undefined;
      });
      state.currentTaskIndex = 0;
      state.totalCompleted = 0;
      state.totalEarned = 0;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.items.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      const taskIndex = state.items.findIndex(t => t.id === taskId);

      if (taskIndex !== -1) {
        const task = state.items[taskIndex];

        if (task.isCompleted) {
          state.totalCompleted -= 1;
          state.totalEarned -= task.reward;
        }

        state.items.splice(taskIndex, 1);

        if (state.currentTaskIndex >= state.items.length){
          state.currentTaskIndex = Math.max(0, state.items.length - 1)
        }
      }
    },
     updateTask: (state, action: PayloadAction<Partial<Task> & { id: string }>) => {
      const { id, ...updates } = action.payload;
      const taskIndex = state.items.findIndex(t => t.id === id);
      
      if (taskIndex !== -1) {
        const oldTask = state.items[taskIndex];

        if ('isCompleted' in updates && updates.isCompleted !== oldTask.isCompleted) {
          if (updates.isCompleted) {
            state.totalCompleted += 1;
            state.totalEarned += oldTask.reward;
          } else {
            state.totalCompleted -= 1;
            state.totalEarned -= oldTask.reward;
          }
        }

        if ('reward' in updates && oldTask.isCompleted) {
          state.totalEarned = state.totalEarned - oldTask.reward + updates.reward!;
        }

        state.items[taskIndex] = { ...oldTask, ...updates };
      }
    },
    suffleTasks: (state) => {
      const suffled = [...state.items]
      for (let i=suffled.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [suffled[i], suffled[j]] = [suffled[j], suffled[i]];
      }
      state.items = suffled;
      state.currentTaskIndex = 0;
    },
    sortByReward: (state, action: PayloadAction<'asc' | 'desc'>) => {
      const sorted = [...state.items].sort((a, b) => {
        return action.payload === 'asc'
        ? a.reward - b.reward
        : b.reward - a.reward;
      });

      state.items = sorted;
      state.currentTaskIndex = 0;
    },
    sortByCompletion: (state) => {
      const sorted = [...state.items].sort((a, b) => {
        if (a.isCompleted === b.isCompleted) return 0;
        return a.isCompleted ? 1 : -1;
      });
      state.items = sorted;
      state.currentTaskIndex = 0;
    }
  }
});

export const selectCurrentTask = (state: {tasks: TaskState}) => {
  return state.tasks.items[state.tasks.currentTaskIndex];
};
export const selectCompletedTask = (state: {tasks: TaskState}) => {
  return state.tasks.items.filter(task => task.isCompleted)
};
export const selectPendingTasks = (state: {tasks: TaskState}) => {
  return state.tasks.items.filter(task => !task.isCompleted)
};
export const selectTaskById = (id: string) => (state: {tasks: TaskState}) => {
  return state.tasks.items.find(task => task.id === id)
};
export const selectTaskByType = (type: string) => (state: {tasks: TaskState}) => {
  return state.tasks.items.filter(task => task.type === type)
};

export const {
  completeTask,
  uncompleteTask,
  selectAnswer,
  nextTask,
  prevTask,
  goToTask,
  goToTaskById,
  resetTasks,
  addTask,
  removeTask,
  updateTask,
  suffleTasks,
  sortByReward,
  sortByCompletion
} = tasksSlice.actions;

export const taskReducer = tasksSlice.reducer;