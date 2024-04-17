import MainApp from './components/MainApp'
import Navbar from './miniComponents/Navbar'
import Profile from './pages/Profile';
import { ToastContainer, toast } from 'react-toastify'
import Favourites from './pages/Favourites';
import "react-toastify/dist/ReactToastify.css";

import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <div className='font-notoSans max-w-screen-xl mx-auto'>
      <Navbar/>
      <ToastContainer position='bottom-center' autoClose={3000} theme='dark'/>
      <Routes>
        <Route path='/' element={<MainApp/>}/>
        <Route path='/profiles' element={<Profile/>}/>
        <Route path='/favourites' element={<Favourites/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
