import { useEffect, useState } from "react";
import { Header } from "../header/header";
import { CatContent } from "../cat-content/cat-content";
import { Cat } from "../../types/cat";

export function App() {
  const [cats, setCats] = useState<Cat[]>();

  const url = "https://api.thecatapi.com/v1/images/search";

  useEffect(() => {
    fetch(
      `${url}?limit=18&order=ASC&size=small&category_ids=4&api_key=live_UMFZdtT2nrzyT3bVZOor23MrbCLEibGjZOuhY2lHNDsfXtykxV4DPkD7rvsNcrFr`
    )
      .then((response) => response.json())
      .then(setCats);
  }, []);

  return (
    <div className="App">
      <Header />
      {cats && <CatContent cats={cats} />}
    </div>
  );
}
