import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { updateTodo } from "../todos/TodoSlice";
import { useDispatch } from 'react-redux';
import { toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const UpdateTodos = () => {
  const location = useLocation();
  const [id] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [des, setDes] = useState(location.state.des);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    dispatch(updateTodo({id, title, des })) 
    navigate('/');
    toast.success("Nice! Todo Updated Successfuly");
  };

  return (
    <div className="border px-24 py-8 w-8/12 mx-auto mt-6">
      <div className="w-full mx-auto px-4 md:px-8 lg:px-24 bg-sky-50 rounded shadow-xl py-">
        <h3 className="text-center font-bold text-2xl pt-4">
          UPDATE YOUR TODO
        </h3>
        <form onSubmit={handleUpdateTodo} className="w-full ">
          {/* title  input */}
          <div className="mt-4">
            <label className="text-sm font-bold">Title:</label>
            <input
              type="text"
              className="border border-sky-500 w-full p-2 focus:outline-none bg-transparent"
              placeholder="Your Title Please."
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          {/* des input */}
          <div className="mt-4">
            <label className="text-sm font-bold">
              Description:
            </label>
            <textarea
              type="text"
              className="border border-sky-500 w-full p-2 focus:outline-none bg-transparent"
              placeholder="Des Please."
              name="des"
              rows={3}
              required
              value={des}
              onChange={(e) => setDes(e.target.value)}
            />
          </div>
          <div className=" mt-12 mb-8 pb-8">
            <input
              className="hover:bg-sky-600 bg-sky-500 rounded text-white font-bold py-2 px-4 w-full cursor-pointer hover:shadow-2xl "
              type="submit"
              value="UPDATE TODO"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTodos;
