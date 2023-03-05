import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='box-border bg-pale-peach px-auto m-auto'>
      <Nav className='fixed'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App