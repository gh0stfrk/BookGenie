import MainApp from './components/MainApp'
import Navbar from './miniComponents/Navbar'
import Footer from './miniComponents/Footer'

function App() {
  return (
    <>
    <div className='flex justify-between flex-column vh-100 overflow-x-hidden'>
      <Navbar/>
      <MainApp/>
      <Footer/>
    </div>
    </>
  )
}

export default App
