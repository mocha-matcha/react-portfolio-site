import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <style>@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,100&display=swap');</style>
      <Header />
      <Outlet/>
      <Footer />
    </>
  )
}

export default App
