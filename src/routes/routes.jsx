import { BrowserRouter, Routes, Route } from "react-router-dom"
import UpdateTodos from "../components/UpdateTodos";
import App from "../App";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/update-todo" element={<UpdateTodos />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
