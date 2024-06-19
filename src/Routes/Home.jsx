import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/Context/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
    const {dentists} = useContextGlobal();
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
                {dentists.map((dentist) => (
                    <Card name={dentist.name} username={dentist.username} id={dentist.id} key={dentist.id}/>
                ))}
      </div>
    </main>
  )
}

export default Home
