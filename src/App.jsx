import './App.css'
import Cards from './components/Cards'
import Marquees from './components/Marquees'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Stripes from './components/Stripes'
import Work from './components/Work'
import Footer from './Footer'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const scroll = new LocomotiveScroll();

  return (
  <div className='w-full min-h-screen bg-stone-900 text-white'>
   <Navbar/>
   <Work/>
   <Stripes/>
   <Products/>
   <Marquees/>
   <Cards/>
   <Footer/>
  </div>
  )
}

export default App
