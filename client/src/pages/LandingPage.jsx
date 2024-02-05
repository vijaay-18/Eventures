import Navbar from '../components/Navbar';
import Hero from './Hero.jsx';
import Stripes from '../components/Stripes.jsx';
import About from '../components/About.jsx';

export const LandingPage = () => {
  return (
    <>
      <div className='max-h-screen'>
        <main className='bg-tertiary  mx-auto  flex flex-col'>
          <Navbar />
          <Hero />
          <Stripes />
          <About />
        </main>
      </div>
    </>

    
  )
}
