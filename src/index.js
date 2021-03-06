import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
fetch("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json")
  .then(async res=>{
    let dataAppRaw = await res.json();
    let dataApp = dataAppRaw.reverse();
    rootElement.classList.remove("loading");
    root.render(
      <StrictMode>
        <App data={dataApp} number={10}/>
      </StrictMode>
    );
    window.dispatchEvent(new Event("test-rendered"))
  })

