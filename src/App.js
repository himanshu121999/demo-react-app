import {useState} from 'react'

function App() {

  // let title = ""

 const [title , setTitle] = useState("abc");

 console.log(title)

  return (
    <div className="h-screen w-screen flex flex-col items-center p-4">
      {/* Form */}
      <div className="w-4/5 flex justify-center">
        <form>
          <div className="flex gap-6 ">
            <input
             value={title}
             onChange={(event)=> {
              setTitle(event.target.value)
             }}
              
            className="border border-gray-400 rounded-md w-[300px]"
            />

            <button className="bg-sky-500 text-white font-medium py-1 px-3 rounded-md">
              {" "}
              Add{" "}
            </button>
          </div>
        </form>
      </div>

      {/* List */}
      <div className="w-4/5 " >
        <ul className="p-4 " >
          <li className="" > Item 1 </li>
          <li> Item 2 </li>
          <li> Item 3 </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
