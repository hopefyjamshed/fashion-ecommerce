import React from 'react';
import { GiShoppingCart } from "react-icons/gi";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail, IconName } from "react-icons/ai";

const Navbar2 = () => {
    const email = 'towhidjamshed5@gmail.com';
    const phoneNumber = '01814138555'
    const tel = '+8801872-777685'
    return (
        <div className='bg-[#2874f0] px-[7px]'>
            <div className="navbar   max-w-[1240px] mx-auto">
                <div className="flex-1 hidden lg:inline">
                    <a href='/' className="lg:inline hidden normal-case text-4xl text-white font-mono ">SORASHOP<GiShoppingCart className='inline mb-[5px]'></GiShoppingCart></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 -ml-5">
                        <li className='text-white'><a><FaFacebookF></FaFacebookF></a></li>

                        <li className='text-white'><a><FaTwitter></FaTwitter></a></li>

                        <li className='text-white'><a><FaInstagram></FaInstagram></a></li>

                        {/* email */}
                        <li className='text-white'><a href={`mailto:${email}`}><AiOutlineMail></AiOutlineMail><span className='hidden md:inline'>{email}</span></a></li>

                        {/* telephone */}
                        <li className='text-white'><a href={`tel:${tel}`}><FaPhoneAlt></FaPhoneAlt><span className='hidden md:inline'>{tel}</span></a></li>

                        {/* whatsapp */}
                        <li className='text-white'><a href={`https://api.whatsapp.com/send?phone=${phoneNumber}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp></FaWhatsapp><span className='hidden md:inline'>{phoneNumber}</span></a></li>

                        <li className='text-white'><a>Link</a></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar2;