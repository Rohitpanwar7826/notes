import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
export default function Header() {
    return (
        <div className="w-full header bg-black">
            <nav className="w-full flex justify-around p-2">
                <div className="flex items-center flex-no-shrink text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">R.K Notes</span>
                </div>
                <div className="w-auto p-2">
                    <div className="text-sm flex items-center justify-center">
                        <NavLink to="/" className="items inline-block  mt-0 text-teal-lighter hover:text-white mr-4 p-1 rounded-xl" style={({isActive})=>{
                            return {backgroundColor: isActive ? 'white' : ''}
                        }}>
                            Notes
                        </NavLink>
                        <NavLink to="/about" className="items inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 p-1 rounded-xl" style={({isActive})=>{
                            return {backgroundColor: isActive ? 'white' : ''}
                        }}>
                            About
                        </NavLink>

                    </div>
                   
                </div>
            </nav>
        </div>
    )
}
