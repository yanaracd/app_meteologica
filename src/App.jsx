import './App.css'
import { Aside } from './components/Aside'
import { Header } from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Today } from './pages/Today'
import { Week } from './pages/Week'

function App() {

  return (
    <BrowserRouter>

      <>
        <Aside />
        <Header />

        <main>
          <Routes>
            <Route path='/'     element={ <Today /> } />
            <Route path='/week' element={ <Week /> } />
          </Routes>
        </main>
      </>

    </BrowserRouter>
  )
}

export default App
