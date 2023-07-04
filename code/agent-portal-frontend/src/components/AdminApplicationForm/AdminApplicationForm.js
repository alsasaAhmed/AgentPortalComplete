
import NavBar from '../NavBar/NavBar'
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import download from '../../assets/images/download-solid.svg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import icon from '../../assets/icons/arrow-left-solid.svg'
import { ToastContainer, toast } from 'react-toastify';
import Spinner from '../Spinner/Spinner';

const AdminApplicationForm = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('app_id');

  const [loading, setLoading] = useState(false)

  const [data, setData] = useState({
    "id": "",
    "status": "",
    "personalInfo": {
      "firstname": "",
      "middlename": "",
      "lastname": "",
      "gender": "",
      "dateOfBirth": "",
      "ssn": ""
    },
    "contactInfo": {
      "phoneOffice": "",
      "phonePersonal": "",
      "email": ""
    },
    "addressList": [
      {
        "isPrimary": "",
        "addressLine01": "",
        "addressLine02": "",
        "addressLine03": "",
        "state": "",
        "country": "",
        "zipCode": "",
        "addressType": ""
      }
    ],
    "educationalInfoList": [
      {
        "highestQualification": "",
        "university": "",
        "year": ""
      }
    ],
    "workExperianceInfoList": [
      {
        "experiance": ""
      }
    ],
    "bankInfo": {
      "bankCode": "",
      "branchCode": "",
      "accountNumber": ""
    },
    "documentList": [
      {
        "docType": "",
        "data": ""
      }
    ]
  });
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/application/' + id, {
          headers: {
            token: localStorage.getItem('token')
            , "Access-Control-Allow-Origin": "*"
          },
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleAccept = async () => {
    try {
      setLoading(true)
      await axios.post(
        `http://localhost:8080/api/application/approve`,
        data,
        {
          headers: {
            token: localStorage.getItem('token'),
            "Access-Control-Allow-Origin": "*"
          },
        }
      ).then(response => {
        // Handle the successful response
        console.log(response.data);
        toast.success("Application is succeed")
        setLoading(false)
        navigate('/otherUserHome')
      })
        .catch(error => {
          // Handle the error
          toast.error("Error: " + error.response.data.errorMessage)
          setLoading(false)
          console.error(error);
        });
      // Optional: Redirect to another page or update the UI
    } catch (error) {
      setLoading(false)
      console.error(error);
    }
  };

  const handleReject = async () => {
    try {
      setLoading(true)
      await axios.post(
        `http://localhost:8080/api/application/reject`,
        data,
        {
          headers: {
            token: localStorage.getItem('token'),
            "Access-Control-Allow-Origin": "*"
          },
        }
      ).then(response => {
        // Handle the successful response
        console.log(response.data);
        setLoading(false)
        toast.success("Application is rejected")
        navigate('/otherUserHome')
      })
        .catch(error => {
          // Handle the error
          setLoading(false)
          toast.error("Error: " + error.response.data.errorMessage)
          console.error(error);
        });
      // Optional: Redirect to another page or update the UI
    } catch (error) {
      setLoading(false)
      console.error(error);
    }
  };

  return (
    <>

      {
        loading ?
          <>
            <ToastContainer />
            <div className='w-full h-full bg-btnText flex items-center justify-center'>
              <Spinner loading={loading} color='#2d98eb' />
            </div>
          </>

          :

          <>
            <ToastContainer />
            <div className='flex items-center justify-center text-userNameColor'>
              <div className='w-full h-1/2 bg-btnText shadow-2xl mx-20 rounded-xl'>
                <div className='' onClick={(e) => { navigate(-1) }}>
                  <img src={icon} alt='2018' className='w-10 h-10' />
                </div>
                <div className='w-full flex items-center justify-center'>
                  <p className='text-2xl font-bold font-sans text-userNameColor'>Submitted Application</p>
                </div>
                <div>
                  <div className=''>
                    <div>
                      <p className='text-2xl ml-2 font-bold text-userNameColor'>Application Details</p>
                    </div>
                    <div className='flex justify-around'>
                      <div>
                        <p className='font-bold'>Application ID</p>
                      </div>
                      <div>
                        <p>{data.id}</p>
                      </div>
                    </div>
                    <div className='flex justify-around'>
                      <div>
                        <p className='font-bold'>Application Status</p>
                      </div>
                      <div>

                        <div >
                          {data.status === 'Approved' ? (
                            <p className='text-acceptedColor'>{data.status}</p>
                          ) : data.status === 'Rejected' ? (
                            <p className='text-rejectedColor'>{data.status}</p>
                          ) : (
                            <p className='text-pendingColor'>{data.status}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


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
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                            <input type="text" id="first_name" readOnly value={data.personalInfo.firstname} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                          </div>
                          <div className='mt-5 w-1/4'>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle name</label>
                            <input type="text" id="middle_name" readOnly value={data.personalInfo.middlename} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                          </div>
                          <div className='mt-5 w-1/4'>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                            <input type="text" id="last_name" readOnly value={data.personalInfo.lastname} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                          </div>
                        </div>

                        <div className='flex flex-row justify-around mx-3'>
                          <div className='mt-5 w-1/4'>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                            {/* <select name="gender" id="gender" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select> */}

                            <input type="text" id="last_name" readOnly value={data.personalInfo.gender} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                          </div>
                          <div className='mt-5 w-1/4'>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                            <input type="text" id="last_name" readOnly value={data.personalInfo.dateOfBirth} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                          </div>
                          <div className='mt-5 w-1/4'>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SSN</label>
                            <input type="text" id="last_name" readOnly value={data.personalInfo.ssn} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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
                            <input type="text" id="last_name" readOnly value={data.contactInfo.phoneOffice} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                          </div>
                          <div className='mt-5 w-1/4'>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number - Personal</label>
                            <input type="text" id="last_name" readOnly value={data.contactInfo.phonePersonal} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                          </div>
                          <div className='mt-5 w-1/4'>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="text" id="last_name" readOnly value={data.contactInfo.email} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                          </div>
                        </div>

                        <div className='mx-3 px-10 mt-5'>

                          <div className='bg-btnText border py-10 px-2'>
                            <div className='flex flex-row'>
                              <div className='flex items-center justify-center'>
                                <p>Primary Address</p>
                              </div>
                              <div class="flex items-center ml-2">
                                <input id="default-checkbox" type="checkbox" value="true" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              </div>
                              <div className=''>
                                <div className='flex flex-row'>

                                  <div className='ml-10 flex flex-row'>
                                    <label for="first_name" class="block mb-2 text-sm font-medium  dark:text-white">Address Type</label>
                                    <input type="text" id="last_name" readOnly value={data.addressList[0].addressType} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                                  </div>
                                </div>
                              </div>

                            </div>

                            <div className='flex flex-row justify-between'>

                              <div className='mt-5 w-1/4'>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address Line 2</label>
                                <input type="text" id="last_name" readOnly value={data.addressList[0].addressLine02} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                              </div>

                              <div className='mt-5 w-1/4'>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address Line 3</label>
                                <input type="text" id="last_name" readOnly value={data.addressList[0].addressLine03} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                              </div>

                              <div className='mt-5 w-1/4'>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                                <input type="text" id="last_name" readOnly value={data.addressList[0].state} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                              </div>

                            </div>

                            <div className='flex flex-row'>

                              <div className='mt-5 w-1/4'>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                                <input type="text" id="last_name" readOnly value={data.addressList[0].country} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                              </div>

                              <div className='mt-5 w-1/4 ml-36'>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ZIP Code</label>
                                <input type="text" id="last_name" readOnly value={data.addressList[0].zipCode} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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
                                <input type="text" id="last_name" readOnly value={data.educationalInfoList[0].highestQualification} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                              </div>

                              <div className='mt-5 w-1/3'>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">University</label>
                                <input type="text" id="last_name" readOnly value={data.educationalInfoList[0].university} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                              </div>

                              <div className='mt-5 w-1/6'>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
                                <input type="text" id="last_name" readOnly value={data.educationalInfoList[0].year} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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
                                <input type="text" id="last_name" readOnly value={data.workExperianceInfoList[0].experiance} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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
                                <input type="text" id="last_name" readOnly value={data.bankInfo.bankCode} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                              </div>

                              <div className='mt-5 w-1/3'>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Branch Code</label>
                                <input type="text" id="last_name" readOnly value={data.bankInfo.branchCode} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                              </div>

                              <div className='mt-5 w-1/6'>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Number</label>
                                <input type="text" id="last_name" readOnly value={data.bankInfo.accountNumber} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                              </div>

                            </div>
                          </div>



                        </div>

                      </div>

                    </div>

                    <div className='pb-5'>

                      <div>
                        <p className='text-lg text-userNameColor font-bold'>Uploaded Documents</p>
                      </div>
                      <div className=''>
                        <div className='mx-3 px-10'>

                          <div className='bg-btnText  px-2'>

                            <div className='flex flex-row justify-between'>

                              <div className='mt-5 flex flex-row'>
                                <div className='border flex flex-row justify-center items-center mx-2 rounded-lg cursor-pointer'>
                                  <div className=''>
                                    <div className='flex flex-row py-2 w-40 items-center justify-center'>
                                      <img src={download} alt='image' className='w-4 h-4 mt-1 mx-2' />
                                      <p>Download</p>
                                    </div>
                                  </div>
                                </div>
                                <div className='border flex flex-row justify-center items-center mx-2 rounded-lg cursor-pointer'>
                                  <div className=''>
                                    <div className='flex flex-row py-2 w-40 items-center justify-center'>
                                      <img src={download} alt='image' className='w-4 h-4 mt-1 mx-2' />
                                      <p>Download</p>
                                    </div>
                                  </div>
                                </div>
                                <div className='border flex flex-row justify-center items-center mx-2 rounded-lg cursor-pointer'>
                                  <div className=''>
                                    <div className='flex flex-row py-2 w-40 items-center justify-center'>
                                      <img src={download} alt='image' className='w-4 h-4 mt-1 mx-2' />
                                      <p>Download</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>

                    <div className='pb-5 pt-10'>
                      <div className='flex flex-row mr-2' >
                        <div className='border-2 border-rejectedColor py-1 w-52 cursor-pointer' onClick={handleAccept}>
                          <p className='text-rejectedColor text-center font-bold'>Accept Application</p>
                        </div>
                        <div className='border-btnPrimaryColor border-2 py-1 w-52 ml-2 cursor-pointer' onClick={handleReject}>
                          <p className='text-btnPrimaryColor text-center font-bold'>Reject Application</p>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </>
      }

    </>
  )
}

export default AdminApplicationForm