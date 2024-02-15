import { BrowserRouter, Routes, Route } from "react-router-dom"
import UpdateTodos from "../components/UpdateTodos";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/update-todo" element={<UpdateTodos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
