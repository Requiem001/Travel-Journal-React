import { useState } from 'react'
import Header from "./components/header"
import Entry from "./components/Entry"



function App() {
 

  return (
    <>
    <Header />
    <div className = "log-list">
    <Entry />
    <Entry />
    <Entry />
    
    </div>
    
   </>
  )
}

export default App
