import {useSelector,} from 'react-redux';
import { CiSquarePlus } from "react-icons/ci";

function App() {
  const todos = useSelector((state)=> state.todos)

  return (
    <div className="w-8/12 mx-auto grid grid-cols-2 gap-8 my-12">
     {
      todos && todos?.map((todo, idx)=>{
        const {title, des} = todo;
        return <div className='border rounded shadow-lg hover:shadow-2xl' key={idx}>
          <h1 className='text-xl font-bold p-4 border-b text-center bg-[#38BDF8] text-white rounded-t'>{title}</h1>
          <p className='font-semibold text-center text-gray-600 p-4'>{des}</p>
          <div className='flex justify-center gap-4 py-8'>
          <button className='flex  bg-sky-400 text-white font-semibold px-2 rounded hover:shadow-2xl hover:bg-sky-500'>Update</button>
          <button className='flex  bg-sky-400 text-white font-semibold px-2 rounded hover:shadow-2xl hover:bg-sky-500'>Delete</button>
          </div>
        </div>
      })
     }
     <div className='border rounded shadow-lg hover:shadow-2xl  flex justify-center items-center h-[12.7rem]'>
      <button ><CiSquarePlus className='font-extrabold text-9xl text-sky-400 hover:text-sky-500'/></button>
     </div>
    </div>
  )
}
export default App;
