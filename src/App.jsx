import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import Add from './components/Add';
import ResponsiveAppBar from './components/AppBar';
import Login from './components/Login';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "item 1", price: 1 },
    { id: 2, name: "item 2", price: 2 },
    { id: 3, name: "item 3", price: 3 },
  ]);

  const [isLogin, setIsLogin] = useState(false);

  const add = (item) => {
    item.id = Date.now();
    setItems([...items, item]);
  };

  const del = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const login = (user) => {
    if (user.username === "admin" && user.password === "admin") {
      setIsLogin(true);
      return true;
    }
    return false;
  };

  const setLogout = () => {
    setIsLogin(false);
  };

  return (
    <div>
      <Router>
        {isLogin && <ResponsiveAppBar setLogout={setLogout} />}
        <Header />
        <Routes>
          <Route path="/" element={<Login login={login} />} />
          <Route path="/add" element={<Add add={add} />} />
          <Route path="/items" element={<List items={items} onDelete={del} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
