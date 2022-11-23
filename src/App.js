import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer name="Nicolas" apellido="Sanfurgo"/>
    </>
  );
}

export default App;
