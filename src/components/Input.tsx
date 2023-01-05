import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

import style from "./Input.module.css";

interface InputProps {
	onAddTask: (content: string) => void;
}

export function Input({ onAddTask }: InputProps) {
	const [content, setContent] = useState('');

	function handleCreateNewTask(event: FormEvent) {
		event.preventDefault();

		onAddTask(content);
		setContent('');
	}

	function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
		event.target.setCustomValidity('');
		setContent(event.target.value);
	}

	return (
		<form className={style.formInput} onSubmit={handleCreateNewTask}>
			<input
				value={content}
				onChange={handleTaskChange}
				type='text'
				placeholder='Adicione uma nova Tarefa'
				required
			/>
			<button type='submit'>
				<span>Criar</span>
				<PlusCircle size={20} />
			</button>
		</form>
	);
}
