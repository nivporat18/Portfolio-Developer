'use client'
import React, {useState} from 'react'

function Page() {

    return (
            <div className="bg-gradient-to-b from-gray-900 to-indigo-100 h-96 w-full">
                     <div className="w-full flex  items-center justify-center my-8">
                     <div className="absolute top-20 bg-white shadow rounded py-12 lg:px-28 px-8">
                     <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">יצירת קשר</p>
                 <div className="md:flex items-center mt-12">

                     <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4 m-4">
                         <label className="text-base font-semibold leading-none text-gray-800">שם מלא</label>
                         <input tabIndex={0} arial-label="Please input name" type="name"
                                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                                placeholder="שם מלא" required/>
                         </div>



                     <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4 m-4">
                                  <label className="text-base font-semibold leading-none text-gray-800">מייל</label>
                                  <input tabIndex={0} arial-label="Please input email address" type="email"
                                         className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                                         placeholder="מייל" required/>
                              </div>


                      <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4 m-4">
                          <div className="md:w-72 flex flex-col">
                              <label className="text-base font-semibold leading-none text-gray-800">טלפון</label>
                              <input tabIndex={0} role="input"  type="tel"
                                     className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                                     placeholder="טלפון" required/>
                          </div>
                      </div>


            </div>
                         <div className="w-full flex flex-col mt-8">
                             <label className="text-base font-semibold leading-none text-gray-800">הודעה</label>
                             <textarea tabIndex={0} aria-label="leave a message" role="textbox"
                                       className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                                       defaultValue={""} required/>
                         </div>


                         <div className="flex items-center justify-center w-full">
                             <button
                                 className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT
                             </button>
                         </div>


                     </div>
                     </div>


            </div>

    )
}

export default Page

