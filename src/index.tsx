import { Container, createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import HomeView from "./views/Home/Home";

const domNode = document.getElementById("root") as Container;

const reactRoot = createRoot(domNode);

reactRoot.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<HomeView />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
