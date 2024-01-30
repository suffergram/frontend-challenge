import { HeaderItem } from "../header-item/header-item";
import "./style.css";

export function Header() {
  return (
    <header className="header">
      <HeaderItem text="Все котики" />
      <HeaderItem text="Любимые котики" />
    </header>
  );
}
