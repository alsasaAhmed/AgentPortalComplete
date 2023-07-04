import React from 'react'
import { useNavigate } from 'react-router-dom'
import AdminNavBar from '../components/AdminNavBar/AdminNavBar'

import Popup from 'reactjs-popup';

const AgentDashboard = () => {

    const navigate = useNavigate()

    const notofications = [
        {
          'id': 1,
          'subject': 'Rejected application',
          'desc': 'Application form with registration id - 1755'
        },
        {
          'id': 2,
          'subject': 'Approved application',
          'desc': 'Application form with registration id - 5487'
        }
      ]
    

    return (
        <>
        <AdminNavBar />
            <div>
                <div className='flex flex-row items-center justify-center'>
                    <div className='mx-2'>
                        <div className='cursor-pointer' onClick={() => navigate('/agent')}>
                            <p >Home</p>
                        </div>
                    </div>
                    <div className='mx-2'>
                        <div className='cursor-pointer' onClick={() => navigate('/agentDashboard')}>
                            <p className='text-navCol'>Dashboard</p>
                        </div>
                    </div>
                    <div className='mx-2'>
                        <div className='cursor-pointer' onClick={() => navigate('/profileUpdate')}>
                            <p>Profile</p>
                        </div>
                    </div>


                    <div>


                    <Popup
            trigger={
              <button type="button" class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                <span class="sr-only">Notifications</span>
                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{notofications.length}</div>
              </button>
            }
            modal
            nested
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header flex items-center justify-center">
                  <p className='text-xl font-semibold'>
                    Your Notifications
                  </p>
                </div>
                <div className="content">
                  <div className='w-80 h-96 bg-btnText shadow-lg'>
                    {

                      notofications.map((notofication, index) => (
                        <div className='shadow-2xl p-2 mt-0'>
                          <div>
                            <p className='font-semibold'>{notofication.subject}</p>
                          </div>
                          <div>
                            <p className='text-sm'>{notofication.desc}</p>
                          </div>
                        </div>
                      ))

                    }

                  </div>
                </div>
              </div>
            )}
          </Popup>
                    </div>

                </div>
                <div>
                    <div className='flex flex-row justify-evenly my-10'>
                        <div className='w-80 h-32 border-l-btnPrimaryColor border-l-4 bg-btnText shadow-2xl rounded-sm flex flex-col justify-center items-center'>
                            <div>
                                <p className='text-userNameColor text-xl'>Total Submitted Documents</p>
                            </div>
                            <div>
                                <p className='text-userNameColor text-lg mt-1'>94</p>
                            </div>
                        </div>
                        <div className='w-80 h-32 border-l-acceptedColor border-l-4 bg-btnText shadow-2xl rounded-sm flex flex-col justify-center items-center'>
                            <div>
                                <p className='text-userNameColor text-xl'>Approved Documents</p>
                            </div>
                            <div>
                                <p className='text-userNameColor text-lg mt-1'>35</p>
                            </div>
                        </div>
                        <div className='w-80 h-32 border-l-rejectedColor border-l-4 bg-btnText shadow-2xl rounded-sm flex flex-col justify-center items-center'>
                            <div>
                                <p className='text-userNameColor text-xl'>Rejected Documents</p>
                            </div>
                            <div>
                                <p className='text-userNameColor text-lg mt-1'>31</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row justify-evenly my-10'>
                        <div className='w-80 h-32 border-l-btnPrimaryColor border-l-4 bg-btnText shadow-2xl rounded-sm flex flex-col justify-center items-center'>
                            <div>
                                <p className='text-userNameColor text-xl'>Total Premium Subscriptions</p>
                            </div>
                            <div>
                                <p className='text-userNameColor text-lg mt-1'>21</p>
                            </div>
                        </div>
                        <div className='w-80 h-32 border-l-acceptedColor border-l-4 bg-btnText shadow-2xl rounded-sm flex flex-col justify-center items-center'>
                            <div>
                                <p className='text-userNameColor text-xl'>Expired Premium Subscriptions</p>
                            </div>
                            <div>
                                <p className='text-userNameColor text-lg mt-1'>7</p>
                            </div>
                        </div>
                        <div className='w-80 h-32 border-l-rejectedColor border-l-4 bg-btnText shadow-2xl rounded-sm flex flex-col justify-center items-center'>
                            <div>
                                <p className='text-userNameColor text-xl'>Subscriptions to be Expired</p>
                            </div>
                            <div>
                                <p className='text-userNameColor text-lg mt-1'>32</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AgentDashboard