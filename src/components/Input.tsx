import { PlusCircle } from "phosphor-react";

import style from "./Input.module.css";

export function Input() {
	return (
		<form className={style.formInput}>
			<input type='text' placeholder='Adicione uma nova Tarefa' required />
			<button type='submit'>
				<span>Criar</span>
				<PlusCircle size={20} />
			</button>
		</form>
	);
}
