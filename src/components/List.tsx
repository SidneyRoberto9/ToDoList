import clipboard from "../assets/Clipboard.svg";
import style from "./List.module.css";

export function List() {
	return (
		<div className={style.list}>
			<header>
				<p>
					<strong>Tarefas Criadas</strong> <span>0</span>
				</p>
				<p>
					<strong>Concluídas</strong> <span>0</span>
				</p>
			</header>

			<div className={style.none}>
				<img src={clipboard} alt='clipboard-text' />
				<strong>Você ainda não tem tarefas cadastradas</strong>
				<p>Crie tarefas e organize seus itens a fazer</p>
			</div>
		</div>
	);
}
