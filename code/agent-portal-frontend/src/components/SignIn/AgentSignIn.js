import React, { useState } from 'react'


import axios from 'axios'

import gentleman from '../../assets/images/Gentleman-cliparts-and-others-art-inspiration.jpg'
import logo from '../../assets/images/life-logo.png'
import NavBar from '../NavBar/NavBar'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const AgentSignIn = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const login = async (e) => {

        if (username === '' || password === '') {
            toast.info("Please enter your credentials")
        }

        else {

            e.preventDefault()
            try {
                await axios.post('http://localhost:8080/api/auth/agent/login', {
                    'username': username,
                    'password': password
                }, { headers: { "Access-Control-Allow-Origin": "*" } })
                    .then(function (response) {
                        localStorage.setItem("token", response.data.token);
                        localStorage.setItem("username", username);
                        navigate('/agent')
                        console.log(response);
                    })
                    .catch(function (error) {
                        toast.error("Error: " + error.response.data.errorMessage)
                        console.log("Err: " + error);

                    });
            }

            catch (error) {
                console.log(error)
            }
        }

    }

    return (
        <>
            <NavBar />
            <ToastContainer />
            <div className='w-full h-fit bg-white shadow-2xl flex justify-around -mt-32'>

                <section className='flex justify-center items-center'>
                    <img className='w-1/2' src={gentleman} alt='Man' />
                </section>

                <section class="bg-gray-50 dark:bg-gray-900 w-1/2">
                    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img class="w-16 h-16 mr-2" src={logo} alt="logo" />
                        </a>
                        <p className='text-lg font-mono -mt-5 mb-3'>Life Insuarance Company</p>
                        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign in to your account
                                </h1>
                                <form class="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={username}
                                            placeholder="John Cena" required
                                            onChange={(e) => setUserName(e.target.value)}
                                        />
                                    </div>
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
                                    <button
                                        type="submit"
                                        class="w-full text-white bg-btnPrimaryColor text-btnText hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                        onClick={login}
                                    >
                                        Sign in
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

export default AgentSignIn