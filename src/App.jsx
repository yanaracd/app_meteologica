import './App.css'
import { Aside } from './components/Aside'
import { Header } from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Today } from './pages/Today'
import { Week } from './pages/Week'
import { createContext, useState } from 'react'

export const CiudadContext = createContext()

function App() {

  let [ ciudad , setCiudad ] = useState({})

  return (
    <BrowserRouter>

      <CiudadContext.Provider value={{ ciudad , setCiudad }}>

        <>
          <Header />
          <Aside />          

          <main>
            <Routes>
              <Route path='/'         element={ <Today /> } />
              <Route path='/week'     element={ <Week />  } />
            </Routes>
          </main>
        </>

      </CiudadContext.Provider>     

    </BrowserRouter>
  )
}

export default App
