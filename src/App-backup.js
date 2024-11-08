import { useState } from "react";

function App() {

  const [title, setTitle] = useState("");
  const [listItems, setListItems] = useState([]);

  return (
    <div className="flex flex-col items-center w-screen h-screen p-4">
      {/* Form */}
      <div className="flex justify-center w-4/5">
        <form onSubmit={(event)=> {
            event.preventDefault();
        }} >
          <div className="flex gap-6 ">
            <input
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              className="border border-gray-400 rounded-md w-[300px]"
            />

            <button
              onClick={() => {
                setListItems([...listItems , title]);
                setTitle("")
              }}
              className="px-3 py-1 font-medium text-white rounded-md bg-sky-500"
            >
              {" "}
              Add{" "}
            </button>
          </div>
        </form>
      </div>

      {/* List */}
      <div className="w-4/5 ">
        <ul className="p-4 ">
          {listItems.map((item) => {
            return <li> {item} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
