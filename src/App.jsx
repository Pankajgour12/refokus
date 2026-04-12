
import './App.css'
import Navbar from './components/Navbar'
import Stripes from './components/Stripes'
import Work from './components/Work'

function App() {

  return (
  <div className='w-full min-h-screen bg-stone-900 text-white'>
   <Navbar/>
   <Work/>
   <Stripes/>
  </div>
  )
}

export default App
