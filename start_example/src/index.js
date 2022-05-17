import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
fetch("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json")
  .then(async res=>{
    let data = await res.json();
    root.render(
      <StrictMode>
        <App data={data}/>
      </StrictMode>
    );
  })

