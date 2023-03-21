import { createSlice } from '@reduxjs/toolkit';
import { typeState } from './type';
import type { PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState: typeState = {
	data: [],
};
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
			state.data.push(todo);
		},
	},
});

// Action creators are generated for each case reducer function
export const { addTask } = todoSlice.actions;

export default todoSlice.reducer;
