import React, { useState } from 'react';
import logo from '../assets/Group 25.png'
import CustomButton from '../resusable/Button';
import Button from '../resusable/Button';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className=" bg-[#FFFFFF] p-4  mx-10 flex justify-between items-center">
            {/* Logo and Company Name */}
            <div className="flex items-center">
               <a href="/"> <img src={logo} alt="Logo" className="h-8 w-auto" /></a>
            
            </div>
            {/* Navigation Menu */}
            <div className="hidden md:flex space-x-[30px]">
                <a  href='/companies'  className="text-[#03031D] font-bold font-body ">Companies</a>
                <a  href='/partners'  className="text-[#03031D] font-bold font-body">Channel Partner</a>
                <a  href='/aboutus' className="text-[#03031D] font-bold font-body">About us</a>

                {/* <a   className="text-[#03031D] font-bold font-body">Claims</a> */}
                <a  href='/bonds' className="text-[#03031D] font-bold font-body ">Bonds</a>
            </div>
            <div>
                 <Button isVisible={true} isWhiteText={true} value='join us'/>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white"
                onClick={toggleMenu}
                aria-label="Toggle Mobile Menu"
            >
                {isOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="black"
                        viewBox="0 0 24 24"
                        stroke="black"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-500 p-4">
                    <a   className="block text-white mb-2">Companies</a>
                    <a   className="block text-white mb-2">Channel Partner</a>
                    <a   className="block text-white mb-2">Claims</a>
                    <a   className="block text-white">Bonds</a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
