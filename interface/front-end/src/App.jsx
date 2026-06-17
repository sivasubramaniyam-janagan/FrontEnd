
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/homepage.jsx'
import AdminPage from './pages/admin.jsx'


function App() {
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center bg-purple-800'>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/admin/*' element={<AdminPage/>}></Route>
        </Routes>
      </div> 
    </>
  )
}

export default App
