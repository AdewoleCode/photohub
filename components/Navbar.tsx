import React from 'react'
import { IoMoon, IoSunny } from "react-icons/io5";
import { SiSimilarweb } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { UseTheme } from '../utils/useTheme';




const Navbar = () => {
    const { isDarkMode, setIsDarkMode } = UseTheme()


    return (
        <div className='max-w-4xl mx-auto py-6 flex justify-between align-center  dark:bg-white dark:border-zinc-700'>
            <h1 className='text-3xl dark:text-black'>Image gallery</h1>
            <span
                className='cursor-pointer border border-white rounded-full p-2 dark:border-black'
                onClick={() => setIsDarkMode(!isDarkMode)}
            >
                {
                    !isDarkMode ?
                        <IoSunny className='nav-icon w-[35px] h-[35px] dark:text-black' />
                        : <IoMoon className='nav-icon w-[35px] h-[35px] dark:text-black' />

                }
            </span>
        </div>
    )
}

export default Navbar