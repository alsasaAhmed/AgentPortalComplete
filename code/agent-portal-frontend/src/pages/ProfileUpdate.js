import AdminNavBar from '../components/AdminNavBar/AdminNavBar'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import circleTick from '../assets/icons/circle-check-regular.svg'

import Popup from 'reactjs-popup';
import { ToastContainer, toast } from 'react-toastify';

const ProfileUpdate = () => {
  const [id,setId] = useState('');
  const [contctId,setContactId] = useState('');
  const [addressId,setAddressId] = useState('');
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/application/0', {
          headers: {
            token: localStorage.getItem('token')
            , "Access-Control-Allow-Origin": "*"
          },
        });
        setId(response.data.id);
        setContactId(response.data.contactInfo.id);
        setAddressId(response.data.addressList[0].id);
        setFirstName(response.data.personalInfo.firstname);
        setMiddleName(response.data.personalInfo.middlename);
        setLastName(response.data.personalInfo.lastname);
        setGender(response.data.personalInfo.gender);
        setDateOfBirth(response.data.personalInfo.dateOfBirth);
        setSsn(response.data.personalInfo.ssn);
        setPhoneOffice(response.data.contactInfo.phoneOffice);
        setPhonePersonal(response.data.contactInfo.phonePersonal);
        setEmail(response.data.contactInfo.email);
        setIsPrimary(response.data.addressList[0].isPrimary);
        setAddressLine01(response.data.addressList[0].addressLine01);
        setAddressLine02(response.data.addressList[0].addressLine02);
        setAddressLine03(response.data.addressList[0].addressLine03);
        setState(response.data.addressList[0].state);
        setCountry(response.data.addressList[0].country);
        setZipCode(response.data.addressList[0].zipCode);
        setAddressType(response.data.addressList[0].addressType);
        setHighestQualification(response.data.educationalInfoList[0].highestQualification);
        setUniversity(response.data.educationalInfoList[0].university);
        setYear(response.data.educationalInfoList[0].year);
        setExperience(response.data.workExperianceInfoList[0].experiance);
        setBankCode(response.data.bankInfo.bankCode);
        setBranchCode(response.data.bankInfo.branchCode);
        setAccountNumber(response.data.bankInfo.accountNumber);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const updateProfile = async () => {
    try {
      await axios.put(
        `http://localhost:8080/api/agent/profile-update`,
        {
          "id":id,
        "contactInfo": {
          "id":contctId,
          "phoneOffice": phoneOffice,
          "phonePersonal": phonePersonal,
          "email": email
        },
        "addressList": [
          {
            "id":addressId,
            "isPrimary": isPrimary,
            "addressType": addressType,
            "addressLine01": addressLine01,
            "addressLine02": addressLine02,
            "addressLine03": addressLine03,
            "state": state,
            "country": country,
            "zipCode": zipCode
        }
        ]
      }
      ,
        {
          headers: {
            token: localStorage.getItem('token'),
            "Access-Control-Allow-Origin": "*"
          },
        }
      ) .then(response => {
        // Handle the successful response
        console.log(response.data);
        toast.success("Succesfully profile updated")
        navigate('/agentHome')
    })
    .catch(error => {
        // Handle the error
        toast.error('Error: '+error.response.data.errorMessage)
        console.error(error);
    });
      // Optional: Redirect to another page or update the UI
    } catch (error) {
      console.error(error);
    }
  };
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
      <ToastContainer />
      <div className='flex flex-row items-center justify-center'>
        <div className='mx-2'>
          <div className='cursor-pointer' onClick={() => navigate('/agent')}>
            <p >Home</p>
          </div>
        </div>
        <div className='mx-2'>
          <div className='cursor-pointer' onClick={() => navigate('/agentDashboard')} >
            <p>Dashboard</p>
          </div>
        </div>
        <div className='mx-2'>
          <div className='cursor-pointer' onClick={() => navigate('/profileUpdate')}>
            <p className='text-navCol '>Profile</p>
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
                        <input type="text" id="first_name" readOnly value={firstName} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                      </div>
                      <div className='mt-5 w-1/4'>
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle name</label>
                        <input type="text" id="middle_name" readOnly value={middleName} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                      </div>
                      <div className='mt-5 w-1/4'>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input type="text" id="last_name" readOnly value={lastName} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                      </div>
                    </div>

                    <div className='flex flex-row justify-around mx-3'>
                      <div className='mt-5 w-1/4'>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                        {/* <select name="gender" id="gender" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select> */}
                        <input type="text" id="last_name" readOnly value={gender} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                      </div>
                      <div className='mt-5 w-1/4'>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                        <input type="text" id="last_name" readOnly value={dateOfBirth} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                      </div>
                      <div className='mt-5 w-1/4'>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SSN</label>
                        <input type="text" id="last_name" readOnly value={ssn} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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
                            <input type="text" id="last_name" readOnly value={highestQualification} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                          </div>

                          <div className='mt-5 w-1/3'>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">University</label>
                            <input type="text" id="last_name" readOnly value={university} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                          </div>

                          <div className='mt-5 w-1/6'>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
                            <input type="text" id="last_name" readOnly value={year} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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
                            <input type="text" id="last_name" readOnly value={experience} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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
                            <input type="text" id="last_name" readOnly value={bankCode} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                          </div>

                          <div className='mt-5 w-1/3'>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Branch Code</label>
                            <input type="text" id="last_name" readOnly value={branchCode} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                          </div>

                          <div className='mt-5 w-1/6'>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Number</label>
                            <input type="text" id="last_name" readOnly value={accountNumber} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                          </div>


                        </div>
                      </div>



                    </div>

                  </div>

                </div>



                <div className='pb-5 pt-10'>
                  <div className='flex flex-row mr-2'>
                    <div className='border-btnPrimaryColor border-2 py-1 w-52 ml-2 cursor-pointer flex items-center justify-center' onClick={updateProfile}>
                      <img src={circleTick} alt='icon' className='w-4 h-4 mr-2' />
                      <p className='text-btnPrimaryColor text-center font-bold'>Update Profile</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </>

    </>
  )
}

export default ProfileUpdate