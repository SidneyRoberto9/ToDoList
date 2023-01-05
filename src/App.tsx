import style from "./App.module.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { List } from "./components/List";

export function App() {
	return (
		<div>
			<Header />

			<main className={style.main}>
				<Input />
				<List />
			</main>
		</div>
	);
}
