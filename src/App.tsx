import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask, deleteTask } from './redux/todoSlice';
import { useAppSelector } from './redux/store';

const App = () => {
	const state = useAppSelector((state) => state.todo);
	const [text, setText] = React.useState<string>('');
	const dispatch = useDispatch();

	const handleClickAdd = (text: string) => {
		dispatch(addTask(text));
	};
	const handleClickDel = (id: string) => {
    console.log(id)
		dispatch(deleteTask(id));
	};

	return (
		<div className="flex justify-center items-center p-20 flex-col">
			<div className="flex w-1/5 justify-between">
				<input
					className="w-full mr-3 border p-2 rounded-md outline-none"
					type="text"
					placeholder="Текст задачи"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button
					onClick={() => handleClickAdd(text)}
					className="bg-blue-500 text-white rounded-lg px-5 py-2 hover:bg-blue-400"
				>
					Добавить
				</button>
			</div>
			{state.length > 0 ? (
				<div className="flex w-1/5 mt-7 border border-gray-400 rounded-lg p-3 flex-col gap-7">
					{state.map((value) => (
						<div key={value.id} className="flex justify-between items-center w-full">
							<div>{value.text}</div>
							<button onClick={() => handleClickDel(value.id)}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="red"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
									/>
								</svg>
							</button>
						</div>
					))}
				</div>
			) : null}
		</div>
	);
};

export default App;
