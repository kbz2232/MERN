import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { HotstarWelcome } from './components/hotstar/HotstarWelcome'
import { HostarHome } from './components/hotstar/HotstarHome'
import { HotstarMovies } from './components/hotstar/HotstarMovies'
import { HotstarError404 } from './components/hotstar/HotstarError404'
import { Play } from './components/Play'
import { FormDemo1 } from './components/forms/FormDemo1'
import { FormDemo2 } from './components/forms/FormDemo2'
import { FormDemo3 } from './components/forms/FormDemo3'
import { FormDemo4 } from './components/forms/FormDemo4'
import { FormDemo5 } from './components/forms/FormDemo5'
import { FormDemo6 } from './components/forms/FormDemo6'
import { FormDemo7 } from './components/forms/FormDemo7'
import { FormDemo8 } from './components/forms/FormDemo8'
import { ValidationForm1 } from './components/forms/ValidationForm1'
// import './App.css'

function App() {
  
  return (
      <div>
       <Navbar></Navbar>
       <Routes>

        <Route path='/' element={<HotstarWelcome/>}></Route>
        <Route path='/home' element={<HostarHome/>}></Route>
        <Route path='/movies' element={<HotstarMovies/>}></Route>
        <Route path='/*' element={<HotstarError404/>}></Route>
        <Route path='/play/:id' element={<Play/>}></Route>
        <Route path='/formdemo1'element={<FormDemo1/>}></Route>
        <Route path='/formdemo2'element={<FormDemo2/>}></Route>
        <Route path='/formdemo3'element={<FormDemo3/>}></Route>
        <Route path='/formdemo4'element={<FormDemo4/>}></Route>
        <Route path='/formdemo5' element={<FormDemo5/>}></Route>
        <Route path='/formdemo6'element={<FormDemo6/>}></Route>
        <Route path='/formdemo7'element={<FormDemo7/>}></Route>
        <Route path='/formdemo8'element={<FormDemo8/>}></Route>
        <Route path='/validationform1' element={<ValidationForm1/>}></Route>





       </Routes>

    </div>
  )
}

export default App
