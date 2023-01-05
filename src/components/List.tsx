import clipboard from "../assets/Clipboard.svg";
import { Task as tk } from "../domains/tasks";
import style from "./List.module.css";
import { Task } from "./Task";

interface ListProps {
	tasks: tk[];
	onDeleteTask: (id: string) => void;
	onCompleteTask: (id: string) => void;
	onReturnTask: (id: string) => void;
}

export function List({
	tasks,
	onDeleteTask,
	onCompleteTask,
	onReturnTask,
}: ListProps) {
	const totalTasks = tasks.length;
	const tasksIsEmpty = totalTasks == 0;
	const totalCompletedTasks = tasks.filter((task) => task.isCompleted).length;
	const totalCompletedTasksString = tasksIsEmpty
		? totalCompletedTasks
		: `${totalCompletedTasks} de ${totalTasks}`;

	return (
		<div className={style.list}>
			<header>
				<p>
					<strong>Tarefas Criadas</strong> <span>{totalTasks}</span>
				</p>
				<p>
					<strong>Concluídas</strong> <span>{totalCompletedTasksString}</span>
				</p>
			</header>

			{tasksIsEmpty ? (
				<div className={style.none}>
					<img src={clipboard} alt='clipboard-text' />
					<strong>Você ainda não tem tarefas cadastradas</strong>
					<p>Crie tarefas e organize seus itens a fazer</p>
				</div>
			) : (
				<div className={style.tasks}>
					{tasks.map((item) => (
						<Task
							task={item}
							onDeleteTask={onDeleteTask}
							onCompleteTask={onCompleteTask}
							onReturnTask={onReturnTask}
							key={item.id}
						/>
					))}
				</div>
			)}
		</div>
	);
}
