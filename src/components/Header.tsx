import logo from "../assets/Logo.svg";
import style from "./Header.module.css";

export function Header() {
	return (
		<div className={style.header}>
			<img src={logo} alt='logotipo' />
		</div>
	);
}
