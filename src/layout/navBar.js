"use client"
import Image from "next/image"
import Short from "../../public/images/logo.svg"
import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="p-8">
            <nav className="flex justify-between items-center p-4 bg-white relative lg:mx-22 xl:mx:26 lg:mr-8">
                
                <span>
                    <Image className="text-white" src={Short} alt="logo" width={80} height={80} />
                </span>

              
                <div className="hidden lg:flex justify-between items-center w-full px-10  ">
                    <div className="flex gap-4">
                        <a className="text-[#9e9aa7] hover:text-black" href="#">Features</a>
                        <a className="text-[#9e9aa7] hover:text-black" href="#">Pricing</a>
                        <a className="text-[#9e9aa7] hover:text-black" href="#">Resources</a>
                    </div>
                    <div className="flex gap-6 items-center">
                        <a href="#" className="px-4 py-2 text-[#9e9aa7] hover:text-black">Login</a>
                        <a href="#" className="bg-[#2acfcf] text-white px-6  py-1 rounded-full ">Sign Up</a>
                    </div>
                </div>

                
                <div onClick={toggleMenu} className="lg:hidden cursor-pointer">
                    {!isOpen ? <RxHamburgerMenu size={24} /> : <IoClose size={24} />}
                </div>

                
                {isOpen && (
                    <div className="flex flex-col gap-4 items-center justify-center absolute top-18 left-0 right-0 bg-[#3b3054] text-white py-10 lg:py-4 rounded-md shadow-lg z-50 lg:hidden">
                        <a className="font-semibold" href="#">Features</a>
                        <a className="font-semibold" href="#">Pricing</a>
                        <a className="font-semibold" href="#">Resources</a>
                        <hr className="w-3/4 border-gray-400" />
                        <a href="#">Login</a>
                        <button className="bg-[#2acfcf] text-white px-14 w-60 text-center  py-2 rounded-full ">Sign Up</button>
                    </div>
                )}
            </nav>
        </div>
    );
}
