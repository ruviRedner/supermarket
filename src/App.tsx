import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'

function App() {


  return (
    <div className='app'>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Layout>

    </div>
  )
}

export default App
