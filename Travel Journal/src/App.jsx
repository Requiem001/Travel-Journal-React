import { useState } from 'react'
import Header from "./components/header"
import Entry from "./components/Entry"
import data from "./components/data.js"


function App() {

  const jsxArray = data.map((item) => {
    return (
      <Entry 
        key = {item.id}
        entry = {item}
      />
    )
  })

  return (
    <>
    <Header />
    <div className = "log-list">
      {jsxArray}
    </div>
    
   </>
  )
}

export default App
