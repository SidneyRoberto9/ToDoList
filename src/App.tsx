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
		console.log(tasks);
	};

	return (
		<div>
			<Header />

			<main className={style.main}>
				<Input onAddTask={onAddTask} />
				<List tasks={tasks} />
			</main>
		</div>
	);
}
