import { Header } from './components/Header'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Hero } from './components/Hero'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Hero/>

        <Routes>
          <Route/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
