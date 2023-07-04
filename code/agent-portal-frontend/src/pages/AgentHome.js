import React from 'react'

import view from '../assets/images/eye.svg'
import AdminNavBar from '../components/AdminNavBar/AdminNavBar'
import { useNavigate } from 'react-router-dom'

import Popup from 'reactjs-popup';

const AgentHome = () => {

  const navigate = useNavigate()

  const data = [
    {
      'id': '101',
      'applicant_name': 'John',
      'status': 'Accepted',
    },
    {
      'id': '102',
      'applicant_name': 'Max',
      'status': 'Accepted',
    },
    {
      'id': '103',
      'applicant_name': 'Barbara',
      'status': 'Pending',
    },
    {
      'id': '104',
      'applicant_name': 'Kevin',
      'status': 'Rejected',
    },
    {
      'id': '105',
      'applicant_name': 'Leo',
      'status': 'Pending',
    },
    {
      'id': '543',
      'applicant_name': 'Natasha',
      'status': 'Pending',
    },
    {
      'id': '397',
      'applicant_name': 'Morris',
      'status': 'Accept',
    },
    {
      'id': '76',
      'applicant_name': 'Mike',
      'status': 'Rejected',
    },
  ]

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
      <div className='flex flex-row items-center justify-center'>
        <div className='mx-2'>
          <div className='cursor-pointer' onClick={() => navigate('/agent')}>
            <p className='text-navCol text=l2x'>Home</p>
          </div>
        </div>
        <div className='mx-2'>
          <div className='cursor-pointer' onClick={() => navigate('/agentDashboard')}>
            <p>Dashboard</p>
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

        <div>
          <div className='w-auto h-2/3 bg-btnText ml-20 mr-20 shadow-2xl shadow-btnText rounded-sm my-20'>
            <div className='flex justify-center -mb-5'>

              <div className='w-1/2'>
                <div class="mb-3">
                  <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                    <input
                      type="search"
                      class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="button-addon2" />
                    <span
                      class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                      id="basic-addon2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="h-5 w-5">
                        <path
                          fill-rule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clip-rule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg flex justify-center items-center">
              <table class="w-3/4 text-sm text-left text-gray-500 dark:text-gray-400 m-20">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Application ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Applicant Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Application Status
                    </th>
                  </tr>
                </thead>
                <tbody>

                  {
                    data.map((item) => (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-tableRowHoverColor dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.id}
                        </th>
                        <td class="px-6 py-4">
                          {item.applicant_name}
                        </td>
                        <td class="px-6 py-4">
                          {item.status === 'Accepted' ? (
                            <p className='text-acceptedColor'>{item.status}</p>
                          ) : item.status === 'Pending' ? (
                            <p className='text-pendingColor'>{item.status}</p>
                          ) : (
                            <p className='text-rejectedColor'>{item.status}</p>
                          )}

                        </td>

                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AgentHome