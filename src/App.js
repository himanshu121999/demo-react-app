// import LinkContainer from './LinkContainer'
// import AppHeader from './AppHeader'
import ProductCard from './ProductCard';
import TodoList from './TodoList/TodoList';

function App() {

  return (
    <div className="h-screen w-screen" >
      {/* <LinkContainer></LinkContainer> */}

      {/* <AppHeader></AppHeader> */}


      {/* <div className='grid grid-cols-4 gap-4' >

        <ProductCard productName="ABC" imageUrl="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/gunmetal-green-full-rim-aviator-vincent-chase-vintage-vc-s13835-c4-polarized-sunglasses_csvfile-1673326856166-j_0103_10_01_2023.jpg" />
        <ProductCard productName="Custom Name" imageUrl="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/black-grey-solid-full-rim-rectangle-square-vincent-chase-polarized-the-metal-edit-vc-s13118-c2-sunglasses_vincent-chase-vc-s13118-c2-sunglasses_sunglasses_g_7219_1_5july23.jpg" />

      </div> */}


      <TodoList/>
    </div>
  );
}

export default App;
