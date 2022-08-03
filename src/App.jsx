import "./App.css";
import CartWidget from "./components/CartWidget";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`);
  };
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <CartWidget />
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </>
  );
}

export default App;
