import React, { useContext, useEffect } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'
import axios from 'axios'

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal)

  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      dispatch({type: "DATA", payload: res.data})
    })
    .catch(error => console.error("Error", error))
  }

  useEffect(() => {
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <main>
      <h1>Nuestros Odontólogos</h1>
      <div className='card-grid'>
        {state.data.map((odontologos) => <Card key={odontologos.id} name={odontologos.name} username={odontologos.username} id={odontologos.id} />)}
      </div>
    </main>
  )
}

export default Home