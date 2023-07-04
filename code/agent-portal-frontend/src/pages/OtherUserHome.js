import React, { useEffect, useState } from 'react';
import view from '../assets/images/eye.svg';
import AdminNavBar from '../components/AdminNavBar/AdminNavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OtherUserHome = () => {

    const navigate = useNavigate()

    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/application/all', {
          headers: {
            token: localStorage.getItem('token')
          },
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredData = data.filter((item) => {
    const { id, personalInfo, contactInfo, status } = item;
    const fullName = `${personalInfo?.firstname} ${personalInfo?.lastname}`;
    const email = contactInfo?.email;
    return (
      String(id).toLowerCase().includes(searchText.toLowerCase()) ||
      fullName.toLowerCase().includes(searchText.toLowerCase()) ||
      email.toLowerCase().includes(searchText.toLowerCase()) ||
      status.toLowerCase().includes(searchText.toLowerCase())
    );
  });
  


    return (
        <>
        <AdminNavBar />
            <div>
                <div className='w-auto h-2/3 bg-btnText ml-20 mr-20 shadow-2xl shadow-btnText rounded-sm my-20'>
                    <div className='flex justify-center -mb-5'>

                        <div className='w-1/2'>
                            <div class="mb-3">
                                <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                                    <input
                                        type='search'
                                        class='relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary'
                                        placeholder='Search'
                                        aria-label='Search'
                                        aria-describedby='button-addon2'
                                        value={searchText}
                                        onChange={handleSearch}
                                    />
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
                                        Email
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Application Status
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        <span class="sr-only">Action</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    filteredData.map((item) => (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-tableRowHoverColor dark:hover:bg-gray-600">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {item.id}
                                            </th>
                                            <td class="px-6 py-4">
                                                {item.personalInfo.firstname} {item.personalInfo.lastname}
                                            </td>
                                            <td class="px-6 py-4">
                                                {item.contactInfo.email}
                                            </td>
                                            <td class="px-6 py-4">
                                                {item.status === 'Approved' ? (
                                                    <p className='text-acceptedColor'>{item.status}</p>
                                                ) : item.status === 'Rejected' ? (
                                                    <p className='text-rejectedColor'>{item.status}</p>
                                                ) : (
                                                    <p className='text-pendingColor'>{item.status}</p>
                                                )}

                                            </td>
                                            <td class="px-6 py-4 text-right cursor-pointer">
                                                <img src={view} alt='view' onClick={() => {navigate('/otherUserFormView?app_id='+item.id)}}/>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtherUserHome