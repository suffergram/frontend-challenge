import { Link, useLocation } from "react-router-dom";
import "./style.css";

type HeaderItemProps = {
  text: string;
  path: string;
};

export function HeaderItem({ text, path }: HeaderItemProps) {
  const location = useLocation();

  return (
    <Link
      to={path}
      className={`header-item ${location.pathname === path ? "active" : ""}`}
    >
      {text}
    </Link>
  );
}
