import React from 'react'
import Button from './Button'

const Add = (add) => {
    const {name, setName} = useState('')
  return (
    <div>
      <input onChange={(e) => setName(e,target.value)} value={name} type="text" name="" id='' />
      <input type="number" name="" id='' />
      <Button name='Agregar' />
    </div>
  )
}

export default Add
