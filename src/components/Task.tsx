import { Check, Circle, Trash } from "phosphor-react";
import { useState } from "react";

import { Task as tk } from "../domains/tasks";
import style from "./Task.module.css";

interface TaskProps {
	task: tk;
}

export function Task({ task }: TaskProps) {
	const [validated, setValidated] = useState(false);

	return (
		<div className={style.task}>
			<div>
				{validated ? (
					<Check
						size={20}
						className={style.check}
						onClick={() => setValidated(false)}
					/>
				) : (
					<Circle
						size={20}
						className={style.uncheck}
						onClick={() => setValidated(true)}
					/>
				)}
				<label>{task.content}</label>
			</div>
			<Trash size={20} className={style.icon} />
		</div>
	);
}
