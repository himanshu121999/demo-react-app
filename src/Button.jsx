

const Button = (props) => {
  
  const {icon, onClick} = props

  return (
    <button onClick={onClick} className="h-[100px] w-[100px] bg-sky-500 text-white rounded-md flex items-center justify-center ">
      {icon}
    </button>
  );
};


export default Button
