import { HeaderItem } from "../header-item/header-item";
import "./style.css";

export function Header() {
  return (
    <header className="header">
      <HeaderItem text="Все котики" path="/" />
      <HeaderItem text="Любимые котики" path="/likes" />
    </header>
  );
}
