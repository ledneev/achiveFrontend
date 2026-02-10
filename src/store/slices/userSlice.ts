import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { initialUserState } from "../../data/initialData";
import type { Collectable } from "../../types/types";

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    addBalance: (state, action: PayloadAction<number>) => {
      state.balance += action.payload;
    },
    subtractBalance: (state, action: PayloadAction<number>) => {
      state.balance -= action.payload;
    },
    addCollectedItem: (state, action: PayloadAction<Collectable>) => {
      state.collectedItems.push(action.payload)
    },
    unlockAchievement: (state, action: PayloadAction<string>) => {
      const achievement = state.achievements.find(a => a.id === action.payload);
      if (achievement) {
        achievement.isUnlocked = true;
        state.balance += achievement.reward;
      }
    },
    incrementOpenedBoxes: (state) => {
      state.openedBoxes += 1;
    },
    incrementCompletedTasks: (state) => {
      state.completedTasks =+ 1;
    }
  }
});

export const {
  addBalance,
  subtractBalance,
  addCollectedItem,
  unlockAchievement,
  incrementOpenedBoxes,
  incrementCompletedTasks
} = userSlice.actions;

export default userSlice.reducer;