import { useEffect, useState } from "react";
import { Icon123, IconMinus, IconPlus } from "@tabler/icons-react";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("Guest");

  console.log("Render");

  const greet = () => {
    console.log(name);
  };

  useEffect(() => {
    greet();
  }, [name]);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex gap-4 items-center">
        {/* Decrement */}
        <Button
          onClick={() => {
            setCount(count - 1);
          }}
          icon={<IconMinus />}
        />

        <Button
          onClick={() => {
            setName("Arpita");
          }}
          icon={<Icon123 />}
        />

        {/* Count */}
        <div className="h-[100px] w-[100px] border rounded-md flex justify-center items-center text-xl">
          {count}
        </div>

        {/* Increment */}
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
          icon={<IconPlus />}
        />
      </div>
    </div>
  );
}

export default App;
