import React from 'react'
import Item from './Item';

const List = ({items, onDelete
})=> {
  return (
  <>
  {items.map((i)=> (
    <Item item={i} key={i.id} onDelete={onDelete}/> 
    ))}
  </>
  );
};

export default List
