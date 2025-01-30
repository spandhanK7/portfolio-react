import React from 'react'
import logo from '../assets/skLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6 lg:mx-25 lg:px-20'>

            <div className='flex flex-shrink-0 items-center'>
                <img src={logo} alt="logo" style={{
                    height: '30px',
                    width: '30px',
                }} />
            </div>

            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/spandhan-kotangle/"><FaLinkedin /> </a>
                <a href="https://github.com/spandhanK7"><FaGithub /></a>
                <a href=""><FaInstagram /></a>
                <a href=""><FaSquareXTwitter /></a>
            </div>

        </nav>
    )
}

export default Navbar
