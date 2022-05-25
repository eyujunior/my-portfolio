import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/Logo.png'
import { ReactComponent as Github } from '../assets/icons/github.svg'
import { ReactComponent as Menu } from '../assets/icons/menu.svg'
import { ReactComponent as Close } from '../assets/icons/close.svg'
const Navbar = ({ current }) => {
  const [mobile, setMobile] = useState(true)
  const navbarClicked = (e) => {
    if (mobile) {
      addMobileNav()
    } else {
      removeMobileNav()
    }
    setMobile((prev) => !prev)
  }
  const removeMobileNav = () => {
    let list = document.querySelector('nav ul')

    list.classList.remove('top-[80px]')
    list.classList.remove('opacity-100')
  }

  const addMobileNav = () => {
    let list = document.querySelector('nav ul')

    list.classList.add('top-[80px]')
    list.classList.add('opacity-100')
  }

  return (
    <div className=''>
      {/* <nav className='hidden'>
        <ul className='flex items-center space-x-10 text-xl font-sans'>
          <li>
            <Link to='/'>Home </Link>
          </li>
          <li>
            <Link to='/#projects'>Projects </Link>
          </li>
          <li>
            <Link to='/#Skills'>Skills </Link>
          </li>
          <li>
            <Link to='/about'>About </Link>
          </li>
          <li>
            <Link to='/contact'>Contact </Link>
          </li>
        </ul>
      </nav> */}

      <nav className='md:flex md:items-center md:justify-between'>
        <div className='flex justify-between items-center '>
          <span className='text-2xl font-sans cursor-pointer'>
            <img className='h-24 w-40  inline' src={Logo} alt='logo' />
          </span>

          <span className='text-3xl cursor-pointer mx-2 md:hidden block'>
            <p onClick={navbarClicked}>
              {mobile ? <Menu /> : <Close className='h-8 w-8' />}
            </p>
          </span>
        </div>

        <ul className='md:flex md:items-center z-[2] md:z-auto md:static absolute bg-primary md:bg-transparent text-white md:text-dark w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
          <li className='mx-4 my-6 md:my-0'>
            <a
              href='https://github.com/eyujunior'
              target='_blank'
              className='text-xl hover:text-cyan-500 duration-500'
              onClick={removeMobileNav}
              rel='noreferrer'
            >
              <Github className='w-8 h-8' />
            </a>
          </li>
          <li className='mx-4 my-6 md:my-0'>
            <Link
              to='/'
              className='text-xl hover:text-cyan-500 duration-500'
              onClick={removeMobileNav}
            >
              HOME
            </Link>
          </li>
          <li className='mx-4 my-6 md:my-0'>
            <a
              href='/#projects'
              onClick={removeMobileNav}
              className='text-xl hover:text-cyan-500 duration-500'
            >
              Projects
            </a>
          </li>
          <li className='mx-4 my-6 md:my-0'>
            <a
              href='/#skills'
              onClick={removeMobileNav}
              className='text-xl hover:text-cyan-500 duration-500'
            >
              Skills
            </a>
          </li>
          <li className='mx-4 my-6 md:my-0'>
            <Link
              to='/about'
              onClick={removeMobileNav}
              className='text-xl hover:text-cyan-500 duration-500'
            >
              About
            </Link>
          </li>
          <li className='mx-4 my-6 md:my-0'>
            <Link
              to='/contact'
              onClick={removeMobileNav}
              className='text-xl hover:text-cyan-500 duration-500'
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
