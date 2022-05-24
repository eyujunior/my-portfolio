import React from 'react'
import { Link } from 'react-router-dom'
import Project from '../components/Project'
import Skills from '../components/Skills'

import Dots from '../assets/img/Dots.png'
import floatSass from '../assets/img/float-sass.png'
import floatTail from '../assets/img/float-tail.png'
import floatRedux from '../assets/img/float-redux.png'
import floatRing from '../assets/icons/float-ring.svg'
import shape from '../assets/img/shape.png'
const Home = () => {
  return (
    <>
      <div className='h-screen-header relative px-4 lg:px-0 '>
        <img
          src={floatRing}
          alt='floatRing'
          className='absolute hidden xl:block float-ring hidden xl:block'
        />
        <img
          src={floatSass}
          alt='floatSass'
          className='absolute hidden xl:block float-sass'
        />
        <img
          src={floatTail}
          alt='floatTail'
          className='absolute hidden xl:block float-tail'
        />
        <img
          src={floatRedux}
          alt='floatRing'
          className='absolute hidden xl:block float-redux'
        />
        <img
          src={Dots}
          alt='Dots'
          className='absolute hidden xl:block float-dots'
        />
        <img
          src={shape}
          alt='shape'
          className='absolute hidden xl:block float-shape'
        />
        <div className='absolute top-1/4 text-center md:text-left '>
          <p className='text-primary font-sans text-xl'>
            Hi, I am eyobel kirub
          </p>
          <h1 className='font-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light w-full  xl:w-4/5 leading-tight md:leading-normal xl:leading-relaxed mb-6 lg:mb-2 capitalize'>
            i <span className='font-medium'>design</span> and
            <span className='font-medium'> develop</span> web experiences
          </h1>
          <p className='text-xl lg:text-2xl font-sans mb-6'>
            I am a frontend developer and UI/UX Designer
          </p>
          <div className='flex space-x-4 justify-center md:justify-start'>
            <Link to='/contact'>
              <button className='px-6 py-2 bg-primary text-white border-2 border-primary text-xl rounded-md border-2'>
                Contact
              </button>
            </Link>
            <Link to='/contact'>
              <button className='px-6 py-2 bg-transparent text-secondary border-2 border-current text-xl rounded-md border-2'>
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h1 className='font-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-2 lg:mb-6 mt-20 capitalize text-center'>
          Projects
        </h1>
        <p className='text-center text-xl lg:text-2xl font-sans md:mb-20 mb-8 px-4'>
          Here are some of my previous projects
        </p>
        <Project />
      </div>

      <div>
        <h1 className='font-title text-7xl font-bold leading-tight mb-2 capitalize text-center'>
          Skills
        </h1>

        <Skills />
      </div>
    </>
  )
}

export default Home
