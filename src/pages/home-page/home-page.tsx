import { useEffect, useState } from "react";
import { CatContent } from "../../components/cat-content/cat-content";
import { Header } from "../../components/header/header";
import { Cat } from "../../types/cat";
import { useLocation } from "react-router-dom";

type HomePageProps = {
  isFavs: boolean;
};

export function HomePage({ isFavs }: HomePageProps) {
  const [cats, setCats] = useState<Cat[]>();

  const location = useLocation();

  const url = "https://api.thecatapi.com/v1/images/search";

  useEffect(() => {
    fetch(
      `${url}?limit=18&order=ASC&size=small&category_ids=4&api_key=live_UMFZdtT2nrzyT3bVZOor23MrbCLEibGjZOuhY2lHNDsfXtykxV4DPkD7rvsNcrFr`
    )
      .then((response) => response.json())
      .then((data) =>
        isFavs
          ? data.filter((item: Cat) => {
              const local = localStorage.getItem(item.id);
              if (local === "true") return true;
              return false;
            })
          : data
      )
      .then(setCats);
  }, [location.pathname]);

  return (
    <div className="App">
      <Header />
      {cats && <CatContent cats={cats} />}
    </div>
  );
}
