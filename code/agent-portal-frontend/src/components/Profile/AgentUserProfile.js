import React from 'react'

import circleTick from '../../assets/icons/circle-check-regular.svg'

const AgentUserProfile = () => {
    return (
        <>
            <div className='flex items-center justify-center text-userNameColor mt-8'>
                <div className='w-full h-1/2 bg-btnText shadow-2xl mx-20 rounded-xl'>
                    <div className='w-full flex items-center justify-center mt-2'>
                        <p className='text-2xl font-bold font-sans text-userNameColor'>User Profile</p>
                    </div>



                    <div className='w-auto h-full justify-center shadow-2xl bg-btnText m-20 mb-48'>

                        <div className='mt-10  px-10'>
                            <div className='mb-5'>
                                <div>
                                    <p className='text-lg text-userNameColor font-bold'>Personal Details</p>
                                </div>
                                <div className=''>
                                    <div className='flex flex-row justify-around mx-3'>
                                        <div className='mt-5 w-1/4'>
                                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Fred" required />
                                        </div>
                                        <div className='mt-5 w-1/4'>
                                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle name</label>
                                            <input type="text" id="middle_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Morris" required />
                                        </div>
                                        <div className='mt-5 w-1/4'>
                                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="De Silva" required />
                                        </div>
                                    </div>

                                    <div className='flex flex-row justify-around mx-3'>
                                        <div className='mt-5 w-1/4'>
                                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                                            <select name="gender" id="gender" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>

                                        </div>
                                        <div className='mt-5 w-1/4'>
                                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                                            <input type="date" id="date_of_birth" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="09-09-1997" required />
                                        </div>
                                        <div className='mt-5 w-1/4'>
                                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SSN</label>
                                            <input type="text" id="ssn" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="54542345" required />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='mb-5'>

                                <div>
                                    <p className='text-lg text-userNameColor font-bold'>Contact Details</p>
                                </div>

                                <div className=''>
                                    <div className='flex flex-row justify-around mx-3'>
                                        <div className='mt-5 w-1/4'>
                                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number - Office</label>
                                            <input type="number" id="phone_number_office" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+94 7166887" required />
                                        </div>
                                        <div className='mt-5 w-1/4'>
                                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number - Personal</label>
                                            <input type="number" id="phone_number_personal" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+94 7166887" required />
                                        </div>
                                        <div className='mt-5 w-1/4'>
                                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                            <input type="email" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@abc.lk" required />
                                        </div>
                                    </div>

                                    <div className='mx-3 px-10 mt-5'>

                                        <div className='bg-btnText border py-10 px-2'>
                                            <div className='flex flex-row'>
                                                <div className='flex items-center justify-center'>
                                                    <p>Primary Address</p>
                                                </div>
                                                <div class="flex items-center ml-2">
                                                    <input id="default-checkbox" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                </div>
                                                <div className=''>
                                                    <div className='flex flex-row'>

                                                        <div className='ml-10 flex flex-row'>
                                                            <label for="first_name" class="block mb-2 text-sm font-medium  dark:text-white">Address Type</label>
                                                            <select name="gender" id="gender" className='ml-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '>
                                                                <option value="male">Residential</option>
                                                                <option value="female">Office</option>
                                                                <option value="female">Agency</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className='flex flex-row justify-between'>

                                                <div className='mt-5 w-1/4'>
                                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address Line 2</label>
                                                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kensintane Place" required />
                                                </div>

                                                <div className='mt-5 w-1/4'>
                                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address Line 3</label>
                                                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bermingham" required />
                                                </div>

                                                <div className='mt-5 w-1/4'>
                                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                                                    <input type="text" id="state" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Yorkshire" required />
                                                </div>

                                            </div>

                                            <div className='flex flex-row'>

                                                <div className='mt-5 w-1/4'>
                                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                                                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="United Kindom" required />
                                                </div>

                                                <div className='mt-5 w-1/4 ml-36'>
                                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ZIP Code</label>
                                                    <input type="text" id="state" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2986" required />
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div className='mb-5'>

                                <div>
                                    <p className='text-lg text-userNameColor font-bold'>Education Details</p>
                                </div>

                                <div className=''>
                                    <div className='mx-3 px-10 mt-5'>

                                        <div className='bg-btnText border py-10 px-2'>

                                            <div className='flex flex-row justify-between'>

                                                <div className='mt-5 w-1/3'>
                                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Highest Qualification</label>
                                                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bachelor's Degree" required />
                                                </div>

                                                <div className='mt-5 w-1/3'>
                                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">University</label>
                                                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="University of Canteburry" required />
                                                </div>

                                                <div className='mt-5 w-1/6'>
                                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
                                                    <input type="text" id="state" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2018" required />
                                                </div>

                                            </div>
                                        </div>



                                    </div>

                                </div>

                            </div>

                            <div className='mb-5'>

                                <div>
                                    <p className='text-lg text-userNameColor font-bold'>Work Experience</p>
                                </div>

                                <div className=''>
                                    <div className='mx-3 px-10 mt-5'>

                                        <div className='bg-btnText border py-10 px-2'>

                                            <div className='flex flex-row justify-between'>

                                                <div className='mt-5 w-full'>
                                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Experience</label>
                                                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Worked as three years as Accountant" required />
                                                </div>
                                            </div>
                                        </div>



                                    </div>

                                </div>

                            </div>

                            <div className='mb-5'>

                                <div>
                                    <p className='text-lg text-userNameColor font-bold'>Bank Details</p>
                                </div>

                                <div className=''>
                                    <div className='mx-3 px-10 mt-5'>

                                        <div className='bg-btnText  px-2'>

                                            <div className='flex flex-row justify-between'>

                                                <div className='mt-5 w-1/3'>
                                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bank Code</label>
                                                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="BCE2345" required />
                                                </div>

                                                <div className='mt-5 w-1/3'>
                                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Branch Code</label>
                                                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2098" required />
                                                </div>

                                                <div className='mt-5 w-1/6'>
                                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Number</label>
                                                    <input type="text" id="state" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2553231234" required />
                                                </div>

                                            </div>
                                        </div>



                                    </div>

                                </div>

                            </div>



                            <div className='pb-5 pt-10'>
                                <div className='flex flex-row mr-2'>
                                    <div className='border-btnPrimaryColor border-2 py-1 w-52 ml-2 cursor-pointer flex items-center justify-center'>
                                        <img src={circleTick} alt='icon' className='w-4 h-4 mr-2'/>
                                        <p className='text-btnPrimaryColor text-center font-bold'>Update Profile</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default AgentUserProfile