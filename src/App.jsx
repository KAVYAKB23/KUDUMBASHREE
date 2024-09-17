import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Gallery from './Components/Gallery'
import Aboutus from './Components/Aboutus'



function App() {


  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<Aboutus />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
