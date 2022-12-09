import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContext(ContextGlobal)
  //console.log(state.data);
  return (
    <main className="" >
      <h1>Nuestros Odontologos</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */
          state.data.map((odontologos) => <Card key={odontologos.id} name={odontologos.name} username={odontologos.username} id={odontologos.id} />)
        }
      </div>
    </main>
  )
}

export default Home