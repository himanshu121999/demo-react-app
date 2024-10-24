import { IconX } from "@tabler/icons-react";

const TaskCard = (props) => {

  const {title , createdByName } = props;

  return (
    <li className="p-4 border rounded-md">
      <div className="text-xl font-medium"> {title} </div>
      <div> Created By : {createdByName} </div>
      <div onClick={()=> alert(title)} > <IconX/> </div>
    </li>
  );
};

export default TaskCard
