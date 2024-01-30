import { Cat } from "../../types/cat";
import { Like } from "../like/like";
import "./style.css";

type CatContentProps = {
  cats: Cat[];
};

export function CatContent({ cats }: CatContentProps) {
  return (
    <main className="cat-content-main">
      {cats &&
        cats.map((cat) => (
          <div key={cat.id} className="cat-content-container">
            <img src={cat.url} className="cat-content-image" />
            <Like
              checked={
                localStorage.getItem(cat.id)
                  ? JSON.parse(localStorage.getItem(cat.id) ?? "")
                  : false
              }
              id={cat.id}
            />
          </div>
        ))}
    </main>
  );
}
