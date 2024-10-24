import TaskCard from "./TaskCard";

const TodoList = () => {

  const tasks= [
    {
      title: "Design Login Page",
      createdByName: "Himanshu"
    },
    {
      title: "Task-2",
      createdByName: "a"
    },
    {
      title: "Task -3",
      createdByName: "b"
    },
    {
      title: "Task -4",
      createdByName: "c"
    },
  ]

  return (
    <div className="flex justify-center p-8" >
      <ul>
        {
          tasks.map((task)=> {
            return (
              <TaskCard title={task.title} createdByName ={task.createdByName} />
            )
          })
        }
        
        
      </ul>
    </div>
  );
};

export default TodoList;
