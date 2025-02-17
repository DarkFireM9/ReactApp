import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = ({add}) => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const onSubmit = (e) => {e.preventDefault(); if (!name || !price) {alert("Ingresa algo"); return;} ; add({name: name, price: price});};
    navigate("/add");
  return (
    <form onSubmit={onSubmit}>
      <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="" id='' />
      <input onChange={(e) => setPrice(e.target.value)} value={price }type="number" name="" id='' />
      <input type= "submit" name='Agregar' value={"add"} />
    </form>
  )
}

export default Add
