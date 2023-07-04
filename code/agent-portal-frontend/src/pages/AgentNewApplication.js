import React, { useState } from 'react'

import plus from '../assets/icons/plus-solid.svg'
import NavBar from '../components/NavBar/NavBar'
import AdminNavBar from '../components/AdminNavBar/AdminNavBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner/Spinner'
import { ToastContainer, toast } from 'react-toastify'

const AgentNewApplication = () => {

    const [items, setItems] = useState(['item'])
    const [eduItems, setEduItems] = useState(['item'])
    const [workItems, setWorkItems] = useState(['item'])

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('Male');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [ssn, setSsn] = useState('');
    const [phoneOffice, setPhoneOffice] = useState('');
    const [phonePersonal, setPhonePersonal] = useState('');
    const [email, setEmail] = useState('');
    const [isPrimary, setIsPrimary] = useState('y');
    const [addressType, setAddressType] = useState('residential');
    // const [addressLine01, setAddressLine01] = useState('');
    const [addressLine01, setAddressLine01] = useState('');
    const [addressLine02, setAddressLine02] = useState('');
    const [addressLine03, setAddressLine03] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [highestQualification, setHighestQualification] = useState("");
    const [university, setUniversity] = useState('');
    const [year, setYear] = useState('');
    const [experience, setExperience] = useState('');
    const [bankCode, setBankCode] = useState('');
    const [branchCode, setBranchCode] = useState('');
    const [accountNumber, setAccountNumber] = useState('');

    const [isChecked, setIsChecked] = useState(true)
    const [allFilled, setAllFilled] = useState(true)
    const [validateSuccess, setValidateSuccess] = useState(false)

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const incrementCount = () => {
        // setCount(count++)
        setItems([...items, 'item'])
        console.log(items)
    }

    const incrementCountEducation = () => {
        // setCount(count++)
        setEduItems([...eduItems, 'item'])
        console.log(items)
    }

    const incrementCountWorkExp = () => {
        // setCount(count++)
        setWorkItems([...workItems, 'item'])
        console.log(items)
    }

    const payloadCreation = () => {
        const payload = {
            "status": "Draft",
            "personalInfo": {
                "firstname": firstName,
                "middlename": middleName,
                "lastname": lastName,
                "gender": gender,
                "dateOfBirth": dateOfBirth,
                "ssn": ssn
            },
            "contactInfo": {
                "phoneOffice": phoneOffice,
                "phonePersonal": phonePersonal,
                "email": email
            },
            "addressList": [
                {
                    "isPrimary": isPrimary,
                    "addressType": addressType,
                    "addressLine01": addressLine01,
                    "addressLine02": addressLine02,
                    "addressLine03": addressLine03,
                    "state": state,
                    "country": country,
                    "zipCode": zipCode
                }
            ],
            "educationalInfoList": [
                {
                    "highestQualification": highestQualification,
                    "university": university,
                    "year": year
                }
            ],
            "workExperianceInfoList": [
                {
                    "experiance": experience
                }
            ],
            "bankInfo": {
                "bankCode": bankCode,
                "branchCode": branchCode,
                "accountNumber": accountNumber
            },
            "documentList": [
                {
                    "docType": "DrivingLicense",
                    "data": ""
                }
            ]
        }

        return payload
    }

    const applicationPayload = payloadCreation()

    const applicationCreation = async (e) => {

        e.preventDefault()


        try {
            await axios.post('http://localhost:8080/api/application/validate',
                {
                    "status": "Draft",
                    "personalInfo": {
                        "firstname": firstName,
                        "middlename": middleName,
                        "lastname": lastName,
                        "gender": gender,
                        "dateOfBirth": dateOfBirth,
                        "ssn": ssn
                    },
                    "contactInfo": {
                        "phoneOffice": phoneOffice,
                        "phonePersonal": phonePersonal,
                        "email": email
                    },
                    "addressList": [
                        {
                            "isPrimary": isPrimary,
                            "addressType": addressType,
                            "addressLine01": addressLine01,
                            "addressLine02": addressLine02,
                            "addressLine03": addressLine03,
                            "state": state,
                            "country": country,
                            "zipCode": zipCode
                        }
                    ],
                    "educationalInfoList": [
                        {
                            "highestQualification": highestQualification,
                            "university": university,
                            "year": year
                        }
                    ],
                    "workExperianceInfoList": [
                        {
                            "experiance": experience
                        }
                    ],
                    "bankInfo": {
                        "bankCode": bankCode,
                        "branchCode": branchCode,
                        "accountNumber": accountNumber
                    },
                    "documentList": [
                        {
                            "docType": "DrivingLicense",
                            "data": ""
                        }
                    ]
                },
                { headers: { "Access-Control-Allow-Origin": "*" } }
            )
                .then(response => {
                    // Handle the successful response
                    console.log(response.data);
                    toast.success('Successfully Validated')
                    setValidateSuccess(true)
                })
                .catch(error => {
                    // Handle the error
                    toast.error('Error: '+error.response.data.errorMessage)
                    console.error(error);
                });
        } catch (error) {
            toast.error("Error")
            console.log(error)
        }

    }

    const formSubmission = async (e) => {
        setLoading(true)
        e.preventDefault()


        try {
            await axios.post('http://localhost:8080/api/application/save',
                {
                    "status": "Draft",
                    "personalInfo": {
                        "firstname": firstName,
                        "middlename": middleName,
                        "lastname": lastName,
                        "gender": gender,
                        "dateOfBirth": dateOfBirth,
                        "ssn": ssn
                    },
                    "contactInfo": {
                        "phoneOffice": phoneOffice,
                        "phonePersonal": phonePersonal,
                        "email": email
                    },
                    "addressList": [
                        {
                            "isPrimary": isPrimary,
                            "addressType": addressType,
                            "addressLine01": addressLine01,
                            "addressLine02": addressLine02,
                            "addressLine03": addressLine03,
                            "state": state,
                            "country": country,
                            "zipCode": zipCode
                        }
                    ],
                    "educationalInfoList": [
                        {
                            "highestQualification": highestQualification,
                            "university": university,
                            "year": year
                        }
                    ],
                    "workExperianceInfoList": [
                        {
                            "experiance": experience
                        }
                    ],
                    "bankInfo": {
                        "bankCode": bankCode,
                        "branchCode": branchCode,
                        "accountNumber": accountNumber
                    },
                    "documentList": [
                        {
                            "docType": "DrivingLicense",
                            "data": ""
                        }
                    ]
                },
                { headers: { "Access-Control-Allow-Origin": "*" } }
            )
                .then(response => {
                    // Handle the successful response
                    console.log(response.data);
                    setLoading(false)
                    toast.success("Application is successfully submitted")
                    setValidateSuccess(true)
                    navigate('/')
                    
                })
                .catch(error => {
                    // Handle the error
                    setLoading(false)
                    toast.error('Error: '+error.response.data.errorMessage)
                    console.error(error);
                });
        } catch (error) {
            console.log(error)
        }

    }



    const handleChangeInCheckBox = () => {
        setIsChecked(!isChecked)
        console.log('mark ' + isChecked)
        if (!isChecked) {
            setIsPrimary('n')
            console.log(isPrimary)
        }
        else {
            setIsPrimary('y')
            console.log(isPrimary)
        }
        console.log('Is Primary' + isPrimary)
    }

    function BankAccountMask(accountNumber) {
        const maskedAccountNumber = accountNumber.slice(0, -4).replace(/./g, '*') + accountNumber.slice(-4);
        // console.log("MAsk" + maskedAccountNumber)
        return maskedAccountNumber;
    };

    return (
        <>
            <AdminNavBar />
            <ToastContainer />
            <div className='w-full h-full'>
                <div className='w-auto h-full justify-center shadow-2xl bg-btnText m-20 mb-48'>
                    <div className='w-full h-fit flex justify-start items-start'>
                        <div className=''>
                            <p className='font-bold text-2xl text-userNameColor ml-1'>Request for Agent Membership</p>
                        </div>
                    </div>

                    <div className='mt-10  px-10'>
                        <div className='mb-5'>
                            <div>
                                <p className='text-lg text-userNameColor font-bold'>Personal Details</p>
                            </div>
                            <div className=''>
                                <div className='flex flex-row justify-around mx-3'>
                                    <div className='mt-5 w-1/4'>
                                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name<span className='text-rejectedColor'>*</span></label>
                                        <input
                                            type="text"
                                            id="first_name"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Fred"
                                            required
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div className='mt-5 w-1/4'>
                                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle name</label>
                                        <input
                                            type="text"
                                            id="middle_name"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Morris"
                                            value={middleName}
                                            onChange={(e) => setMiddleName(e.target.value)}
                                        />
                                    </div>
                                    <div className='mt-5 w-1/4'>
                                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name<span className='text-rejectedColor'>*</span></label>
                                        <input
                                            type="text"
                                            id="last_name"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="De Silva" required
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className='flex flex-row justify-around mx-3'>
                                    <div className='mt-5 w-1/4'>
                                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                                        <select
                                            name="gender"
                                            id="gender"
                                            value={gender}
                                            onChange={(e) => {
                                                setGender(e.target.value)
                                            }}
                                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>

                                    </div>
                                    <div className='mt-5 w-1/4'>
                                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth<span className='text-rejectedColor'>*</span></label>
                                        <input
                                            type="date"
                                            id="date_of_birth"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="09-09-1997" required
                                            value={dateOfBirth}
                                            onChange={(e) => setDateOfBirth(e.target.value)}
                                        />
                                    </div>
                                    <div className='mt-5 w-1/4'>
                                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SSN</label>
                                        <input
                                            type="text"
                                            id="ssn"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="54542345"
                                            value={ssn}
                                            onChange={(e) => setSsn(e.target.value)}
                                        />
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
                                        <input
                                            type="number"
                                            id="phone_number_office"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="+94 7166887"
                                            value={phoneOffice}
                                            onChange={(e) => setPhoneOffice(e.target.value)}
                                        />
                                    </div>
                                    <div className='mt-5 w-1/4'>
                                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number - Personal<span className='text-rejectedColor'>*</span></label>
                                        <input
                                            type="number"
                                            id="phone_number_personal"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="+94 7166887" required
                                            value={phonePersonal}
                                            onChange={(e) => setPhonePersonal(e.target.value)}
                                        />
                                    </div>
                                    <div className='mt-5 w-1/4'>
                                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email<span className='text-rejectedColor'>*</span></label>
                                        <input
                                            type="email"
                                            id="last_name"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@abc.lk" required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className='mx-3 px-10 mt-5'>

                                    <div className='flex items-center justify-end py-2 cursor-pointer' onClick={incrementCount}>
                                        <img src={plus} alt='image' className='w-7 h-7 border rounded-full mx-1' />
                                        <p className='text-sm'>Add More</p>
                                    </div>

                                    {
                                        items.map((element, index) => (

                                            <div className='bg-btnText border py-10 px-2 my-2'>
                                                <div className='flex flex-row'>
                                                    <div className='flex items-center justify-center' >
                                                        <p>Primary Address<span className='text-rejectedColor'>*</span></p>
                                                    </div>
                                                    <div class="flex items-center ml-2">
                                                        <input id="default-checkbox" checked={isChecked} onChange={handleChangeInCheckBox} type="checkbox" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    </div>
                                                    <div className=''>
                                                        <div className='flex flex-row'>

                                                            <div className='ml-10 flex flex-row'>
                                                                <label for="first_name" class="block mb-2 text-sm font-medium  dark:text-white">Address Type</label>
                                                                <select name="addressType" value={addressType} onChange={(e) => setAddressType(e.target.value)} id="gender" className='ml-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '>
                                                                    <option value="residential">Residential</option>
                                                                    <option value="office">Office</option>
                                                                    <option value="agency">Agency</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className='flex flex-row justify-between'>
                                                    <div className='mt-5 w-1/4'>
                                                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address Line 1</label>
                                                        <input value={addressLine01} onChange={(e) => setAddressLine01(e.target.value)} type="text" id="addressLine1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kensintane Place" required />
                                                    </div>

                                                    <div className='mt-5 w-1/4'>
                                                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address Line 2</label>
                                                        <input value={addressLine02} onChange={(e) => setAddressLine02(e.target.value)} type="text" id="addressLine2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kensintane Place" required />
                                                    </div>

                                                    <div className='mt-5 w-1/4'>
                                                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address Line 3</label>
                                                        <input value={addressLine03} onChange={(e) => setAddressLine03(e.target.value)} type="text" id="addressLine3" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bermingham" required />
                                                    </div>



                                                </div>

                                                <div className='flex flex-row justify-between'>

                                                    <div className='mt-5 w-1/4'>
                                                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                                                        <input value={state} onChange={(e) => setState(e.target.value)} type="text" id="state" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Yorkshire" />
                                                    </div>

                                                    <div className='mt-5 w-1/4'>
                                                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                                                        <input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="United Kindom" />
                                                    </div>

                                                    <div className='mt-5 w-1/4'>
                                                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ZIP Code<span className='text-rejectedColor'>*</span></label>
                                                        <input type="text" id="state" value={zipCode} onChange={(e) => setZipCode(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2986" required />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }



                                </div>

                            </div>

                        </div>


                        <div className='mb-5'>

                            <div>
                                <p className='text-lg text-userNameColor font-bold'>Education Details</p>
                            </div>

                            <div className=''>
                                <div className='mx-3 px-10 mt-5'>

                                    <div className='flex items-center justify-end py-2 cursor-pointer' onClick={incrementCountEducation}>
                                        <img src={plus} alt='image' className='w-7 h-7 border rounded-full mx-1' />
                                        <p className='text-sm'>Add More</p>
                                    </div>

                                    {
                                        eduItems.map((index) => (

                                            <div className='bg-btnText border py-10 px-2 mb-2'>

                                                <div className='flex flex-row justify-between'>

                                                    <div className='mt-5 w-1/3'>
                                                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Highest Qualification<span className='text-rejectedColor'>*</span></label>
                                                        <input value={highestQualification} onChange={(e) => setHighestQualification(e.target.value)} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bachelor's Degree" required />
                                                    </div>

                                                    <div className='mt-5 w-1/3'>
                                                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">University</label>
                                                        <input value={university} onChange={(e) => setUniversity(e.target.value)} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="University of Canteburry" />
                                                    </div>

                                                    <div className='mt-5 w-1/6'>
                                                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year<span className='text-rejectedColor'>*</span></label>
                                                        <input value={year} onChange={(e) => setYear(e.target.value)} type="text" id="state" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2018" required />
                                                    </div>

                                                </div>
                                            </div>
                                        ))
                                    }


                                </div>

                            </div>

                        </div>

                        <div className='mb-5'>

                            <div>
                                <p className='text-lg text-userNameColor font-bold'>Work Experience</p>
                            </div>

                            <div className=''>
                                <div className='mx-3 px-10 mt-5'>

                                    <div className='flex items-center justify-end py-2 cursor-pointer' onClick={incrementCountWorkExp}>
                                        <img src={plus} alt='image' className='w-7 h-7 border rounded-full mx-1' />
                                        <p className='text-sm'>Add More</p>
                                    </div>

                                    {
                                        workItems.map((index) => (

                                            <div className='bg-btnText border py-10 px-2 mb-2'>

                                                <div className='flex flex-row justify-between'>

                                                    <div className='mt-5 w-full'>
                                                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Experience</label>
                                                        <input value={experience} onChange={(e) => setExperience(e.target.value)} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Worked as three years as Accountant" required />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }




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
                                                <input value={bankCode} onChange={(e) => setBankCode(e.target.value)} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="BCE2345" required />
                                            </div>

                                            <div className='mt-5 w-1/3'>
                                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Branch Code</label>
                                                <input value={branchCode} onChange={(e) => setBranchCode(e.target.value)} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2098" required />
                                            </div>

                                            <div className='mt-5 w-1/6'>
                                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Number</label>
                                                <input value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} type="number" id="state" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2553231234" required />
                                            </div>

                                        </div>
                                    </div>



                                </div>

                            </div>

                        </div>

                        <div className=''>

                            <div>
                                <p className='text-lg text-userNameColor font-bold'>Document Upload</p>
                                <div>
                                    <p className='text-xs italic mb-1 '>Upload your driving license, address proof and degree certificate</p>
                                </div>
                            </div>
                            <div className=''>
                                <div className='mx-3 px-10'>

                                    <div className='bg-btnText  px-2'>

                                        <div className='flex flex-row justify-between'>

                                            <div className='mt-5 w-1/3'>


                                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Driving License</label>
                                                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                                                <p class="mt-1 text-xs text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>


                                            </div>



                                        </div>
                                        <div className='flex flex-row justify-between'>

                                            <div className='mt-5 w-1/3'>


                                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Address Proof</label>
                                                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                                                <p class="mt-1 text-xs text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>


                                            </div>



                                        </div>
                                        <div className='flex flex-row justify-between'>

                                            <div className='mt-5 w-1/3'>


                                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Degree Certificate</label>
                                                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                                                <p class="mt-1 text-xs text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>


                                            </div>



                                        </div>
                                    </div>



                                </div>

                            </div>

                        </div>

                    </div>

                    
                    <div className='flex items-center justify-center'>
                        <Spinner loading={loading} color='#2d98eb' />
                    </div>
                

                    <div className='mt-10 pb-10'>
                        <p className='text-xs italic mb-1 ml-10' >Please, validate your form before submitting.</p>
                        <div className='flex flex-row justify-around'>
                            <div>
                                <button className='bg-btnPrimaryColor w-60 h-10 rounded-lg shadow-2xl' onClick={applicationCreation}>
                                    Validate
                                </button>
                            </div>
                            {
                                validateSuccess ?

                                    <button className='bg-btnPrimaryColor w-60 h-10 rounded-lg shadow-2xl' onClick={formSubmission} >
                                        Submit
                                    </button>
                                    :
                                    <button className='bg-tableRowHoverColor w-60 h-10 rounded-lg shadow-2xl' disabled>
                                        Submit
                                    </button>
                            }
                        </div>

                        {

                            allFilled ? <>
                            </> :

                                <div className='text-center mt-10'>
                                    <p className='text-rejectedColor'>Please, fill all the required fields. Check the red colored * named fields</p>
                                </div>
                        }

                    </div>

                </div>
            </div>
        </>
    )
}

export default AgentNewApplication