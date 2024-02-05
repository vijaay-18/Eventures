import React,{useState} from 'react'
import {Logo,Login,Menu} from '../utils/Images'
import NavLinks from '../utils/NavLinks'
import {Text} from '../components/Text'
import {Button} from'../components/Button'
const Navbar = () => {
    // const [toggle, setToggle] = useState(false);
    // const toggleMenu=()=>{
    //     setToggle(!toggle)
    // }
  return (
    <nav className='flex-shrink-0 w-full  padding-x padding-t padding-b shadow-md flex items-center justify-between'>
        <div className='flex items-center'>
            <img className='' src={Logo} alt="Logo" />
            <Text variant='h4' className='uppercase text-primary '>eventures</Text>
        </div>
        {/* <div className='md:hidden'>
            <button className='focus:outline-none focus:bg-slate-500/20 px-3 py-2 rounded-md ' onClick={toggleMenu}>
                <img width={30} height={30} src={Menu} alt="Menu"  />
            </button>
        </div> */}
        <div className='flex items-center'>
                {NavLinks.map((item)=>(
                    <React.Fragment key={item.id}>
                        <div  className= 'flex items-center flex-col margin-x'>
                            <img  src={item?.img} alt={item?.label} />
                            <Text className='text-sm font-semibold'>{item?.label}</Text>
                        </div>
                    </React.Fragment>
                      
                ))}
            <div >
                <Button size='lg' border='doublexl'  >Login<img className='pl-2 ' src={Login} alt="Login Image"  /></Button>
            </div>    
        </div>
    </nav>
  )
}

export default Navbar