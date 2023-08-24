import React from 'react'
import { AiFillGithub } from 'react-icons/ai';

const Header = () => {
    return (
        <div className='flex items-center text-white p-4 justify-center border-b-[1px]'>
            <div className='text-9xl'>
                <AiFillGithub />
            </div>
            <h1 className='p-10 text-4xl font-bold'>How to set up Organisations in Github</h1>
        </div>
    )
}

export default Header
