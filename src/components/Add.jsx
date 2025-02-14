import React, { useState } from 'react'

const Add = ({add}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const onSubmit = (e) => {e.preventDefault(); if (!name || !price) {alert("Ingresa algo"); return;} ; add({name: name, price: price});};
  return (
    <form onSubmit={onSubmit}>
      <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="" id='' />
      <input onChange={(e) => setPrice(e.target.value)} value={price }type="number" name="" id='' />
      <input type= "submit" name='Agregar' value={"add"} />
    </form>
  )
}

export default Add
