import { nanoid } from 'nanoid';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Task } from './type';

const initialState: Task[] = [];

export const prefix = 'todo';
export const todoSlice = createSlice({
	name: prefix,
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<string>) => {
			const todo = {
				id: nanoid(),
				text: action.payload,
			};
			state.push(todo);
		},
		deleteTask: (state, action: PayloadAction<string>) => {
			return state.filter((task) => task.id !== action.payload);
		},
	},
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask } = todoSlice.actions;

export default todoSlice.reducer;
