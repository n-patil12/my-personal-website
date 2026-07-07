import React from 'react'
import { useState } from 'react'
import './App.css'
import SomlaCoffee from './assets/SomlaCoffee.gif'
import styled from "styled-components"
import { Button } from 'bootstrap'

const YuyuStyled = styled.h1`
    font-family: "Yuyu", serif;
    font-weight: bold;
    font-style: normal; 
  `;

function App() {
  
  return (
    <>
    <div className='bg-[#c68f3a] w-screen h-screen flex'>
      
      <img src={SomlaCoffee} className='flex-none inline-2xl h-screen ml-30 ' />

      <div className='flex-1 justify-center justify-items-center self-center absolute top-4/32 right-4/32'>
       <YuyuStyled className='text-[#210c03] text-7xl mb-7'>Share Stories,</YuyuStyled>
       <YuyuStyled className='text-[#210c03] text-7xl mb-7'>Cultivate Conversations,</YuyuStyled>
       <YuyuStyled className='text-[#210c03] text-7xl'>Spread It to the World.</YuyuStyled>

       <div className="justify-center justify-items-center self-center">
        <button className='bg-[#641736] pr-20 pl-20 pt-3 pb-3 mt-20 text-4xl text-[#ffe19a] rounded-4xl shadow-xl/50 shadow-[#210c03]'>
          <YuyuStyled>Create a new account</YuyuStyled>
        </button>
       </div>
      
      <div className='mt-10 flex flex-row justify-center justify-items-center self-center'>
       <hr className='mt-3' width="250px" size="3%"></hr>
       <p className='ml-2 mr-2'>OR</p>
       <hr className='mt-3' width="250px" size="3%"></hr>
      </div>
        
      </div>
      
      
      {/* Rest of your app content goes here */}
    </div>
    </>
  )
}

export default App
