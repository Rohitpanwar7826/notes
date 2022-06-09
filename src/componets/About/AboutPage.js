import React from 'react'
import profilePic from '../imgs/rohit.jpeg'
export default function AboutPage() {
  return (
    <>
      <div className="w-full h-full p-1 flex justify-center -my-10 py-12">
        <div className="h-full flex flex-col justify-center items-center bg-white my-10 justify-center items-center md:max-w-sm rounded-lg shadow-sm p-2 shadow-2xl border-2 border-red-400 ">

          <div className="mt-8 shadow mx-auto h-48 w-32  border-white rounded-full overflow-hidden border-4">
            <img className="object-cover w-full h-full" src={profilePic} alt="profile-img" />
          </div>
          <div className="mt-4">
            <h1 className="text-lg text-center font-semibold">
              Rohit Singh
            </h1>
            <p className="text-sm text-gray-600 text-center">
              Software Engineer
            </p>
          </div>
          <hr className="mt-2" />
          <div className="w-full text-xs mr-2 my-1 font-bold tracking-wider text-center mt-4 ">
            <h1 className="text-red-500 text-xl">Skills</h1>
          </div>
          <div className="mt-6 pt-3 flex items-center justify-center flex-wrap mx-6 border-t">

            <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
              HTML css & TailwindCSS
            </div>

            <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
              JavaScript
            </div>
            <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
              Ruby on Rails
            </div>
            <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
              React js
            </div>
            <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
              Python
            </div>
            <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
              C++
            </div>
            <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
              GUI programming
            </div>
            <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
              SQL
            </div>
            <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
              Flask
            </div>

          </div>
        </div>
      </div>
    </>)
}
