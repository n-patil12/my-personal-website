import React from 'react'
import { useState } from 'react'
import './App.css'
import SomlaCoffee from './assets/SomlaCoffee.gif'

function App() {
  
  return (
    <>
    <div className='bg-[#c68f3a] w-screen h-screen'>
      
      <img src={SomlaCoffee} className='inline-2xl h-screen ml-30' />

      <div>
        <h1></h1>
      </div>
      
      
      {/* Rest of your app content goes here */}
    </div>
    </>
  )
}

export default App
