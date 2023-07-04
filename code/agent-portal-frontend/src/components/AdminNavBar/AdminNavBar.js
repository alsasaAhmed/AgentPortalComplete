import React from 'react'

import logo from '../../assets/images/life-logo.png'
import logoutImg from '../../assets/icons/arrow-right-from-bracket-solid.svg'
import { useNavigate } from 'react-router-dom'

const AdminNavBar = () => {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear();
        navigate('/')
    }

    return (
        <>
            <div className=''>
                <div className='flex justify-between mx-20 h-fit'>
                    <div className='flex items-\'>
                        <div>
                            <img
                                className='w-20 h-20'
                                src={logo}
                                alt='logo' />
                        </div>
                        <div className='flex items-center ml-20'>
                            <p className='text-userNameColor font-bold text-4xl'>Hi {localStorage.getItem("username")}</p>
                        </div>
                    </div>
                    <div className='col flex justify-center items-center cursor-pointer' onClick={logout} >
                        <div className='flex content-center'>
                            <div className='w-5 h-5 mt-1 cursor-pointer'>
                                <img src={logoutImg} alt="Your SVG" />
                            </div>
                            <div className='mx-3 cursor-pointer'>
                                <p className='text-lg font-bold text-navCol'>Logout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminNavBar