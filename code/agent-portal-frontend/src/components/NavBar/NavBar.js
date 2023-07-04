import React from 'react'
import TopNav from '../TopNav/TopNav'
import register from '../../assets/icons/person-circle-plus-solid.svg'
import login from '../../assets/icons/arrow-right-to-bracket-solid.svg'

import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <>
            <TopNav />
            {/* <div>
                <div className='flex content-normal justify-end mx-10'>

                    <button className='flex content-normal mx-2' onClick={() => navigate('/registration')}>
                        <div className='cursor-pointer mr-1 mt-1'>
                            <img src={register} alt="Your SVG" className='w-4 h-4' />
                        </div>
                        <div className='cursor-pointer ml-1'>
                            <p className='text-md text-navCol'>Sign Up</p>
                        </div>
                    </button>

                    <button className='flex content-normal mx-2' onClick={() => navigate('/login')}>
                        <div className=' cursor-pointer mr-1 mt-1'>
                            <img src={login} alt="Your SVG" className='w-4 h-4' />
                        </div>
                        <div className='cursor-pointer ml-1'>
                            <p className='text-md text-navCol'>Sign In</p>
                        </div>
                    </button>

                </div>
            </div> */}
        </>
    )
}

export default NavBar