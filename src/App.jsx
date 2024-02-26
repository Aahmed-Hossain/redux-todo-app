import {useSelector,useDispatch} from 'react-redux';
import { CiSquarePlus } from "react-icons/ci";
import Modal from "react-modal";
import { toast} from 'react-toastify';
import { useState } from 'react';
import { addTodos, deleteTodos } from './todos/TodoSlice';
import { Link } from 'react-router-dom';

function App() {
  const todos = useSelector((state)=> state.todos);
  const dispatch = useDispatch();
  const openModal = () => setModalOpen(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const closeModal = () => {
    setModalOpen(false);
  };

const handleAddTodo = (e) => {
  e.preventDefault();
  const todo = {title, description}
  dispatch(addTodos(todo));
  closeModal();
  toast.success('Nice! Todo Added Successfuly')
}

const handleDelteTodo = (id) =>{
  dispatch(deleteTodos(id))
  toast.success('Deleted Successfuly')
}

  return (
    <div className="w-8/12 mx-auto grid grid-cols-2 gap-8 my-12">
     {
      todos && todos?.map((todo)=>{
        const {id, title, des} = todo;
        console.log(id);
        return <div className='border rounded shadow-lg hover:shadow-2xl' key={id}>
          <h1 className='text-xl font-bold p-4 border-b text-center bg-[#38BDF8] text-white rounded-t'>{title}</h1>
          <p className='font-semibold text-center text-gray-600 p-4'>{des}</p>
          <div className='flex justify-center gap-4 py-8'>
          <Link  to={'/update-todo'} state={{id, title, des}} className='flex  bg-sky-400 text-white font-semibold px-2 rounded hover:shadow-2xl hover:bg-sky-500'>Update</Link>
          <button  onClick={()=>handleDelteTodo(id)} className='flex  bg-sky-400 text-white font-semibold px-2 rounded hover:shadow-2xl hover:bg-sky-500'>Delete</button>
          </div>
        </div>
      })
     }
     <div className='border rounded shadow-lg hover:shadow-2xl  flex justify-center items-center h-[12.7rem]'>
      <button onClick={openModal} ><CiSquarePlus className='font-extrabold text-9xl text-sky-400 hover:text-sky-500'/></button>
     </div>



     {/* Modal for add todo */}
     <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add todo"
        ariaHideApp={false}
      >
<div className='w-full md:w-1/2 lg:w-1/2 mx-auto px-4 md:px-8 lg:px-24 bg-sky-50 rounded shadow-xl py-'>
   <h3 className='text-center font-bold text-2xl pt-4'>ADD YOUR TODO</h3>
     <form 
    onSubmit={handleAddTodo}
     className="w-full ">
    {/* title  input */}
    <div className="mt-4">
     <label className="text-sm font-bold">Title:
     </label>
      <input
      type="text" 
      className="border border-sky-500 w-full p-2 focus:outline-none bg-transparent"
      placeholder="Your Title Please."
      name="title"
      // value={title}
      onChange={(e)=>setTitle(e.target.value)}
      required
       />
     </div>
    {/* description input */}
    <div className="mt-4">
     <label className="text-sm font-bold">Description:
     </label>
      <textarea
      type="text" 
      className="border border-sky-500 w-full p-2 focus:outline-none bg-transparent"
      placeholder="Description Please."
      name="description"
      rows={3}
      required
      // value={description}
      onChange={(e)=>setDescription(e.target.value)}
       />
     </div>
     <div className=" mt-12 mb-8 pb-8">
      <input
            className="hover:bg-sky-600 bg-sky-500 rounded text-white font-bold py-2 px-4 w-full cursor-pointer hover:shadow-2xl "
            type="submit"
            value="ADD TODO"
                />
              </div>
     </form>
   </div>
      </Modal>
    </div>
  )
}
export default App;
