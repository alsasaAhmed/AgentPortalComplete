import React, { useState } from 'react'
import axios from 'axios';
import regImg from '../../assets/images/reg_img.jpg'

const SignUp = () => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDoB] = useState('')
    const [ssn, setSsn] = useState('')

    const submit = () => {
            // const user = {
            //     'username': username,
            //     'firstName': firstName,
            //     'middleName': middleName,
            //     'lastName': lastName,
            //     'password': password,
            //     'gender': gender,
            //     'dob': dob,
            //     'ssn': ssn
            // }

            axios.post('http://localhost:8080/api/auth/register', {
                'username': username,
                'firstname': firstName,
                'middlename': middleName,
                'lastname': lastName,
                'password': password,
                'gender': gender,
                'dateOfBirth': dob,
                'ssn': ssn
            },{ headers: { "Access-Control-Allow-Origin": "*"} } )
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            // console.log('user' + user.firstName)
        // console.log(username)
        // console.log(firstName)
        // console.log(middleName)
        // console.log(lastName)
        // console.log(password)
        // console.log(gender)
        // console.log(dob)
        // console.log(ssn)
    }

    return (
        <>
            <div className='w-fit h-fit flex bg-white shadow-2xl rounded m-10'>
                <div className='bg-red-500 w-2/3 p-10'>
                    <div>
                        <img src={regImg} alt='image' className='' />
                    </div>
                </div>
                <div className="w-1/3">
                    <form className="px-8 pt-6 pb-8 mb-4">
                        <div className="w-full mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="firstName">
                                First Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="firstName"
                                type="text"
                                placeholder="Username"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="middleName">
                                Middle Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="middleName"
                                type="text"
                                placeholder="Username"
                                value={middleName}
                                onChange={(e) => setMiddleName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="gender">
                                Last Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="gender"
                                type="text"
                                placeholder="Username"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className='flex justify-around'>
                            <div class="flex items-center mx-2">
                                <input
                                    id="male"
                                    type="radio"
                                    name="default-radio"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    value="male"
                                checked={gender === "male"}
                                onChange={(e) => setGender(e.target.value)}
                                />
                                <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                            </div>
                            <div class="flex items-center mx-2">
                                <input
                                    id="female"
                                    type="radio"
                                    value="female"
                                    name="default-radio"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                checked={gender === "female"}
                                onChange={(e) => setGender(e.target.value)}
                                />
                                <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                            </div>
                        </div>
                        <div className="mb-4 mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="dob">
                                Date of Birth
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="dob"
                                type="date"
                                placeholder="Username"
                            value={dob}
                            onChange={(e) => setDoB(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="ssn">
                                SSN
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="ssn"
                                type="text"
                                placeholder="Username"
                            value={ssn}
                            onChange={(e) => setSsn(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="bg-btnPrimaryColor hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={submit}
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp