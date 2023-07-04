import NavBar from '../NavBar/NavBar'
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PasswordCreation = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()


    const createPwd = async (e) => {
        e.preventDefault();
    
        // try {
          const response = await axios.put(
            'http://localhost:8080/api/agent/set-password',
            {
              app_id: id,
              password: password,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
              },
            }
          ).then(function (response) {
              toast.success('Successfully created your password')
                navigate('/')
                console.log(response);
        })
        .catch(function (error) {
            console.log("error",error);
            toast.error('Error: '+error.response.data.errorMessage
            );
        });;
    
          // Handle the response
        //   console.log(response.data);
        // } catch (error) {
        //   // Handle the error
          
        //   console.error(error);
        // }
      };
    

    return (
        <>
            <ToastContainer />
            <NavBar />
            <div className='w-full h-fit bg-white shadow-2xl flex justify-around -mt-20'>
                <section class="bg-gray-50 dark:bg-gray-900 w-1/2">
                    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Create your password
                                </h1>
                                <form class="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        {/* <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            // value={username}
                                            placeholder="John Cena" disabled
                                        // onChange={(e) => setUserName(e.target.value)}
                                        /> */}
                                    </div>

                                    <div>

                                        <div>
                                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="••••••••"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                            onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className='mt-1'>
                                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm your password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="••••••••"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                            onChange={(e) => setPassword(e.target.value)}


                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        class="w-full text-white bg-btnPrimaryColor text-btnText hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    onClick={createPwd}
                                    >
                                        Create Password
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </>
    )
}

export default PasswordCreation