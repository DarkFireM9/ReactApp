import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import List from './components/List';
import Add from './components/Add';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import ResponsiveAppBar from './components/AppBar';
import CredentialsSignInPage from './components/Login';



function App() {
  const [items, setItems] = useState( [
    {id: 1, name: "item 1", price: 1},
    {id: 2, name: "item 2", price: 2},
    {id: 3, name: "item 3", price: 3},
  ]);
  const [count, setCount] = useState(0);
  const sum = () => {
    setCount(count + 1);
  };
  const resta = () => {
    setCount(count - 1);
  };
  const add = (item) => {item.id = items.length + 1; setItems([...items, item])};
  const del = (id) => {setItems(items.filter((item) => item.id !== id))};
  return (
    <div>
      <BrowserRouter>
      <ResponsiveAppBar/>
        <Header/>
        <Routes>
        <Route path='/' element={<CredentialsSignInPage/>} />
        <Route path="/add" element={<Add add={add}/>} />
        <Route path="/items" element={<List items={items} onDelete={del} />} />
        {/* <Route path="/user" element={} /> */}
        {/* <Route path="/game" element={} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    {/* {count} */}
    {/* <Button name={"suma"} click={sum} /> */}
    {/* <Button name={"resta"} click={resta} /> */}
    {/* <Button name={"mensaje"} click={() => alert("Hola Mundo")} /> */}
    </div>
  );
}

export default App;
