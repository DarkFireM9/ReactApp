import React from 'react'

const Item = (items) => {
  return (
    <div>
        <ul>
            <li>{items.name}</li>
            <li>{items.price}</li>
        </ul>
    </div>
  )
}

export default Item
