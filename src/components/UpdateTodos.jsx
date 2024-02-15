import { useState } from "react";
import { toast } from "react-toastify";
const UpdateTodos = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    toast.success("Nice! Todo Updated Successfuly");
    // setSelectedTodo(null);
  };
  return (
    <div className="border px-20 py-8">
      <div className="w-full md:w-1/2 lg:w-1/2 mx-auto px-4 md:px-8 lg:px-24 bg-sky-50 rounded shadow-xl py-">
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
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          {/* description input */}
          <div className="mt-4">
            <label className="text-sm font-bold">
              Descriptionsssssssssssssss:
            </label>
            <textarea
              type="text"
              className="border border-sky-500 w-full p-2 focus:outline-none bg-transparent"
              placeholder="Description Please."
              name="description"
              rows={3}
              required
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
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
