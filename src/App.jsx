
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import CoffeeCard from './Components/CoffeeCard'
import { useState } from 'react'

function App() {
  const loaderCoffees = useLoaderData()
  const [cof,setCof]=useState(loaderCoffees)

  return (
    <>
      <Navbar></Navbar>

      <div className='mx-16'>
        <h1 className='text-5xl text-center'>Hot Cold Coffee :{cof.length} </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-8 p-6 '>
          {
            cof.map(coffee => <CoffeeCard
              key={coffee._id}
              coffees={coffee}
              cof={cof}
              setCof={setCof}
            ></CoffeeCard>)
          }
        </div>
      </div>
    </>
  )
}

export default App
