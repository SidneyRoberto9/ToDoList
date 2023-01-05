import { useState } from "react";
import { v4 as uuid } from "uuid";

import style from "./App.module.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { List } from "./components/List";
import { Task } from "./domains/tasks";

export function App() {
	const [tasks, setTasks] = useState<Task[]>([]);

	const onAddTask = (content: string) => {
		const newTask = {
			id: uuid(),
			content,
			isCompleted: false,
		};
		setTasks((prev) => [...prev, newTask]);
	};

	const onDeleteTask = (id: string) => {
		setTasks((prev) => prev.filter((task) => task.id !== id));
	};

	const onCompleteTask = (id: string) => {
		setTasks((prev) =>
			prev.map((task) =>
				task.id === id ? { ...task, isCompleted: true } : task
			)
		);
	};

	const onReturnTask = (id: string) => {
		setTasks((prev) =>
			prev.map((task) =>
				task.id === id ? { ...task, isCompleted: false } : task
			)
		);
	};

	return (
		<div>
			<Header />

			<main className={style.main}>
				<Input onAddTask={onAddTask} />
				<List
					tasks={tasks}
					onCompleteTask={onCompleteTask}
					onDeleteTask={onDeleteTask}
					onReturnTask={onReturnTask}
				/>
			</main>
		</div>
	);
}
