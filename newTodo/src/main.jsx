import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const DATA = [
  { id: "todo-0", name: "В унитаз сходит", completed: true },
  { id: "todo-1", name: "Покурит веип", completed: false },
  { id: "todo-2", name: "Посмотрет Лобанов", completed: false },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App tasks={DATA} />
  </StrictMode>,
);
