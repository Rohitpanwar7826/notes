import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="w-full fixed inset-x-0 bottom-0">

        <footer className="text-center bg-gray-900 text-gray-500 text-sm">
        <div className="container px-2 pt-1">
            <p>Create and Developed By : Ro<span className="text-blue-600">h</span>i<span className="text-red-600">t</span> S<span className="text-yellow-600">i</span>ng<span className="text-yellow-600">h</span> <span className="text-red-600">P</span>an<span className="text-yellow-600">w</span>ar</p>
        </div>
        <hr  className="bg-red-500 text-red-200"/>
        <div className="text-center p-1" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
            © 2022 Copyright :
            <Link to="/" className="text-whitehite"> R.K Notes</Link>
        </div>
        </footer>
    </div>
  )
}
