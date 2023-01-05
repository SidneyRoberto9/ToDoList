import { Check, Circle, Trash } from "phosphor-react";
import { useState } from "react";

import { Task as tk } from "../domains/tasks";
import style from "./Task.module.css";

interface TaskProps {
	task: tk;
	onDeleteTask: (id: string) => void;
	onCompleteTask: (id: string) => void;
	onReturnTask: (id: string) => void;
}

export function Task({
	task,
	onDeleteTask,
	onCompleteTask,
	onReturnTask,
}: TaskProps) {
	function handleDeleteTask() {
		onDeleteTask(task.id);
	}

	function handleCompleteTask() {
		onCompleteTask(task.id);
	}

	function handleReturnTask() {
		onReturnTask(task.id);
	}

	return (
		<div className={style.task}>
			<div>
				{task.isCompleted ? (
					<Check size={20} className={style.check} onClick={handleReturnTask} />
				) : (
					<Circle
						size={20}
						className={style.uncheck}
						onClick={handleCompleteTask}
					/>
				)}
				<label className={task.isCompleted ? style.complete : style.incomplete}>
					{task.content}
				</label>
			</div>
			<Trash onClick={handleDeleteTask} size={20} className={style.icon} />
		</div>
	);
}
