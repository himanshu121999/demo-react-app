import { IconHeart, IconStarFilled } from "@tabler/icons-react";

const ProductCard = (props) => {
  console.log(props); // This is an Object

  return (
    <div className="border rounded p-2 border-gray-200">
      <div className="flex justify-end">
        <IconHeart />
      </div>
      <div>
        <img src={props.imageUrl} />
      </div>

      <div className="flex">
        <div className="rounded-full bg-sky-100 py-2 px-4 flex gap-1 items-center">
          4.8 <IconStarFilled size={12} /> 50
        </div>
      </div>

      <div className="text-gray-600"> {props.productName} </div>
      <div> Size & Color </div>
      <div> Price </div>
      <div> Discount </div>
    </div>
  );
};

export default ProductCard;
