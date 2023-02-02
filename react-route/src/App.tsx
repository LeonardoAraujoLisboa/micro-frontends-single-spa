import React, { useEffect, useState } from 'react'
import { LifeCycles } from 'single-spa'
import Parcel from 'single-spa-react/parcel'/* isso é para carregar um parcel dentro do outro */
import { v4 as uuid } from 'uuid'
import { emitEvent } from '../../utils/src/lal-utils'

const App = ({ name }) => {
  const [task, updateTask] = useState('')

  const handleChange = (event) => {
    updateTask(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    emitEvent('@lal/react-route/todo/add-task', {
      id: uuid(),
      describe: task
    })/* esse nome é so um padrao, organização -> parcel q disparou -> context do evento e nome do evento */
    console.log('SALVANDO...');
    updateTask('')
  }
  
  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={task}/>
          <button>Add</button>
      </form>
      <Parcel
        config={() => System.import<LifeCycles>('@lal/react-parcel')}
      />
    </>
  )
}

export default App