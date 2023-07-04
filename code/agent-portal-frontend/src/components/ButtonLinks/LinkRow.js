import React from 'react'

import Popup from 'reactjs-popup';

import formIcon from '../../assets/icons/file-invoice-solid.svg'
import person from '../../assets/icons/agent-user.svg'
import user from '../../assets/icons/user-solid.svg'
import { useNavigate } from 'react-router-dom';

const LinkRow = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className='my-12'>
                <div className='flex justify-around'>
                    <div className='w-80 h-60 bg-navCol rounded-xl cursor-pointer shadow-2xl' onClick={() => navigate('/agentApplication')}>
                        <div className='flex-col justify-center items-center'>
                            <div className='mt-20 flex items-center justify-center mb-5'>
                                <p className='font-bold font-sans text-xl text-btnText'>New Application</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <img src={formIcon} alt='icon' className='w-10 h-10' />
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-around'>
                        <div className='w-80 h-60 bg-navCol rounded-xl cursor-pointer shadow-2xl' onClick={() => navigate('/agentLogin')}>
                            <div className='flex-col justify-center items-center'>
                                <div className='mt-20 flex items-center justify-center mb-5'>
                                    <p className='font-bold font-sans text-xl text-btnText'>Registered Agent Login</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <img src={person} alt='icon' className='w-10 h-10' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-around'>
                        <div className='w-80 h-60 bg-navCol rounded-xl cursor-pointer shadow-2xl' onClick={() => navigate('/otherLogin')}>
                            <div className='flex-col justify-center items-center'>
                                <div className='mt-20 flex items-center justify-center mb-5'>
                                    <p className='font-bold font-sans text-xl text-btnText'>Other User Login</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <img src={user} alt='icon' className='w-10 h-10' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LinkRow