import React from 'react';
import { BsCompass } from 'react-icons/bs';
import { CiMobile3 } from 'react-icons/ci';
import { RiMessage2Line } from 'react-icons/ri';
import img from '../../public/about-banner.png'
import './contact.css'

const Contact = () => {
    return (
        <div id='Contact'>
            <div className='w-11/12 border-b-2 border-gray-600 py-4 md:flex gap-8 mx-auto mt-12'>
                <div className='my-16'>
                    <div data-aos="fade-right" data-aos-duration="1500">
                        <h2 className='italic font-bold'>Contact</h2>
                        <h2 className='text-5xl uppercase font-bold my-4'>Reach out me</h2>
                    </div>
                    <div className='flex border-2 mb-4 border-gray-700 p-4 items-center gap-8' data-aos="fade-up" data-aos-duration="1500">
                        <div>
                            <RiMessage2Line className='text-2xl w-16 h-16 p-3 bg-gradient-to-r from-[#af2676] to-[#441b45] text-white' />
                        </div>
                        <div>
                            <h2 className='font-bold text-xl'>Chat to us</h2>
                            <h3 className='text-gray-400'>Our friendly team is there to</h3>
                            <h3 className='text-gray-400'>help.info@domainname.com</h3>
                        </div>
                    </div>
                    <div className='flex border-2 mb-4 border-gray-700 p-4 items-center gap-8' data-aos="fade-up" data-aos-duration="1500">
                        <div>
                            <BsCompass className='text-2xl w-16 h-16 p-3 bg-gradient-to-r from-[#af2676] to-[#441b45] text-white' />
                        </div>
                        <div>
                            <h2 className='font-bold text-xl'>Visit us</h2>
                            <h3 className='text-gray-400'>Come say hello at ur office HQ. Warnwe Park</h3>
                            <h3 className='text-gray-400'>Streetperrine, FL 33157 New York City</h3>
                        </div>
                    </div>
                    <div className='flex border-2 border-gray-700 p-4 items-center gap-8' data-aos="fade-up" data-aos-duration="1500">
                        <div>
                            <CiMobile3 className='text-2xl w-16 h-16 p-3 bg-gradient-to-r from-[#af2676] to-[#441b45] text-white' />
                        </div>
                        <div>
                            <h2 className='font-bold text-xl'>Call us</h2>
                            <h3 className='text-gray-400'>Mon-Fri from 8am to 5pm. +01 (555) 000-0000</h3>
                        </div>
                    </div>
                    <div className='my-4'>
                        <iframe className='opacity-80' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8658970834604!2d144.96623407569498!3d-37.8166099719749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato%20Pty%20Ltd!5e0!3m2!1sen!2sbd!4v1726914296251!5m2!1sen!2sbd" width="450" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className='my-16 md:p-16 p-4 bg-gradient-to-r from-[#af2676] to-[#441b45]' data-aos="fade-up" data-aos-duration="1500">
                    <h2 className='text-4xl mb-2 font-bold'>Got Ideas? We have got the skills. Lets team up.</h2>
                    <h2>Tell us more about yourself and what you are got in mind.</h2>
                    <div

                    >
                        <div className='md:flex gap-4 text-white' data-aos="fade-right" data-aos-duration="1500">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className=" uppercase">Your Name:</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Name *"
                                    className="input contact input-bordered w-full"
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="uppercase">Your Email:</span>
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email *"
                                    className="input contact input-bordered w-full "
                                />
                            </label>
                        </div>
                        <label className="form-control w-full" data-aos="fade-right" data-aos-duration="1500">
                            <div className="label">
                                <span className="uppercase">subject:</span>
                            </div>
                            <input
                                type="email"
                                placeholder="Subject *"
                                className="input contact input-bordered w-full "
                            />
                        </label>
                        <label className="form-control w-full " data-aos="fade-right" data-aos-duration="1500">
                            <div className="label">
                                <span className=" uppercase">Your Message:</span>
                            </div>
                            <textarea
                                className="textarea h-32 contact"
                                placeholder="Message *"
                            ></textarea>
                        </label>
                        <button className="p-3 mx-auto w-full bg-black mt-8 duration-500 hover:bg-white hover:text-black">
                            Send Message
                        </button>
                    </div>
                </div>



            </div>
            <div className='w-10/12 flex justify-between items-center my-4 mx-auto'>
                <div className='md:flex items-center gap-4' data-aos="fade-right" data-aos-duration="1500">
                    <img className='w-12 h-12 rounded-full' src={img} alt="" />
                    <h2 className='font-semibold text-xl'>lilon Williamson</h2>
                </div>
                <div>
                    <h2 className='text-xs'>© 2024 copyright all right reserved</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;