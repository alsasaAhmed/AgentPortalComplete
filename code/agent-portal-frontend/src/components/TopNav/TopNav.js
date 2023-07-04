import React from 'react'
import logo from '../../assets/images/life-logo.png'
import phone from '../../assets/icons/phone-solid.svg'


const TopNav = () => {
    return (
        <div className=''>
            <div className='flex justify-between mx-20 h-32'>
                <div>
                    <img
                        className='w-20 h-20'
                        src={logo}
                        alt='logo' />
                </div>
                <div className='col flex justify-center items-center'>
                    <div className='flex content-center'>
                        <div className='w-5 h-5 mt-1 cursor-pointer'>
                            <img src={phone} alt="Your SVG" />
                        </div>
                        <div className='mx-3 cursor-pointer'>
                            <p className='text-lg font-bold text-navCol'>Call Us</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav