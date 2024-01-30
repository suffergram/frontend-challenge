import "./style.css";

type HeaderItemProps = {
  text: string;
};

export function HeaderItem({ text }: HeaderItemProps) {
  return <a className="header-item">{text}</a>;
}
