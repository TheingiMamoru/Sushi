import React from 'react'
import Nav from './components/Nav'
import About from './pages/About'
import Home from './pages/Home'
import Popular from './pages/Popular'
import Recently from './pages/Recently'

const App = () => {
  return (
    <div className=' m-0 p-0 bg-pale-peach'>
      <div className='container mx-auto max-w-screen-lg'>
        <Nav/>
        <Home/>
        <About/>
        <Popular/>
        <Recently/>
      </div>
    </div>
  )
}

export default App