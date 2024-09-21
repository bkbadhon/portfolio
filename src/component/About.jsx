import React from 'react';
import img from '../../public/about-banner.png'
import { MdOutlineFileDownload } from 'react-icons/md';
import { IoIosPhonePortrait, IoMdContact } from 'react-icons/io';
import { FaMapLocation } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import pdf from '../../public/Resume.pdf'

const About = () => {
    return (
        <div id='About' className='w-11/12 mx-auto'>
            <h2 className='italic text-2xl font-bold' data-aos="fade-right" data-aos-duration="1800">Nice to meet you!</h2>
            <h1 className='text-5xl font-bold' data-aos="fade-right" data-aos-duration="1800">WELCOME TO...</h1>

            <div className='my-20 md:flex gap-8 justify-between items-center'>
                <div>
                    <img className='w-[400px]' data-aos="zoom-in-up" data-aos-duration="2000" src={img} alt="" />
                    <h2 className='uppercase text-5xl text-[#9c3e9e] my-4 font-bold' data-aos="fade-right" data-aos-duration="1000">Lilon Macwan</h2>
                    <h3 className='font-semibold text-3xl my-4' data-aos="fade-right" data-aos-duration="1500">Web Designer <span className='font-thin'>based in </span>USA</h3>
                    <button className='bg-gradient-to-r from-[#af2676] to-[#441b45] hover:bg-[#af2676] duration-500 flex gap-2 p-[12px] my-8 px-8 font-semibold' data-aos="fade-up" data-aos-duration="1500"><a className='flex items-center' href={pdf} download={pdf}>Download CV <MdOutlineFileDownload className='text-2xl' /></a></button>
                </div>
                <div>
                    <h2 data-aos="fade-right" data-aos-duration="1000">Born in 2000, AB type living in USA. We provide on-screen design for websites and <br />apps, as well as front-end implementation. We will continue to pursue a wide range <br /> of expressions and better code by pursuing our “likes”.

                    </h2>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-8 my-8' data-aos="fade-down" data-aos-duration="1500">
                        <h2 className='flex gap-2 font-bold items-center text-xl'><IoIosPhonePortrait />+123 45 666 7788</h2>
                        <h2 className='flex gap-2 font-bold items-center text-xl'><IoMdContact />Lilon Macwan</h2>
                        <h3 className='flex gap-2 font-bold items-center text-xl'><IoMail />mccandesigner@gmail.com</h3>
                        <h3 className='flex gap-2 font-bold items-center text-xl'><FaMapLocation />California, USA</h3>
                    </div>
                    <div className="divider divider-secondary" data-aos="fade-right" data-aos-duration="1500"></div>

                    <div>
                        <div className='md:flex justify-between'>
                            <div className='' data-aos="fade-down" data-aos-duration="1500">
                                <div className='flex gap-2 items-center my-4'>
                                    <h2 className='text-4xl font-bold text-[#9c3e9e]'>10+</h2>
                                    <h2 className='font-bold text-2xl'>Years <br />
                                        experience...</h2>
                                </div>
                                <h3 data-aos="fade-right" data-aos-duration="1500">Hello there! My name is <span className='text-[#9c3e9e]'>Lilon Macwan</span>. I <br /> am a web designer & developer, and Im <br /> very passionate and dedicated to my <br /> work.</h3>
                            </div>
                            <div className='' data-aos="fade-down" data-aos-duration="1500">
                                <div className='flex gap-2 items-center my-4'>
                                    <h2 className='text-4xl font-bold text-[#9c3e9e]'>50+</h2>
                                    <h2 className='font-bold text-2xl'>Clients <br />
                                        Worldwide...</h2>
                                </div>
                                <h3 data-aos="fade-right" data-aos-duration="1500">With 10+ years experience as a <br /> professional designer, I have acquired <br /> the skills to make your project a <br /> success.</h3>
                            </div>
                        </div>
                        <div className='flex items-center bg-[#ffffff16] rounded-xl my-2 p-4' data-aos="fade-right" data-aos-duration="1500">
                            <h1 className='text-5xl font-extrabold'>"</h1>
                            <h2 className='text-xl font-bold'>“Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Faucibus sed sit ultrices et sed metus <br /> sollicitudin.”</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-16 p-4 md:flex justify-between bg-gradient-to-r from-[#af2676] to-[#441b45]'>
                <div className='md:w-2/5' data-aos="fade-up" data-aos-duration="2000">
                    <p className='italic font-bold text-xl my-4'>Experience</p>
                    <h2 className='text-5xl font-bold my-8 uppercase'>My Experience</h2>
                    <p>Hello there! My name is Lilon Macwan. I am a <br /> web designer & developer, and Im very <br /> passionate and dedicated to my work.</p>
                    <button className='bg-black hover:bg-white hover:text-black duration-300 flex gap-2 p-[12px] my-8 px-8 font-semibold'><a className='flex items-center' href={pdf} download={pdf}>Download my resume <MdOutlineFileDownload className='text-2xl' /></a></button>
                </div>
                <div className='md:w-3/5' data-aos="fade-up" data-aos-duration="3000">
                    <div className='md:flex gap-32 mb-4 justify-between mr-8'>
                        <h2 className='text-xl font-bold'>-2020 - Present</h2>
                        <h2 className='text-xl font-bold'>-UI/UX Lead</h2>
                    </div>
                    <h3 className='text-4xl border-b-2 border-x-gray-100 py-8 mb-8 font-extrabold'>LEAD UI/UX DESIGNER</h3>
                    <div className='md:flex gap-32 mb-4 justify-between mr-8'>
                        <h2 className='text-xl font-bold'>-2017 - 2018</h2>
                        <h2 className='text-xl font-bold'>-UI/UX Designer</h2>
                    </div>
                    <h3 className='text-4xl border-b-2 border-x-gray-100 py-8 mb-8 font-extrabold'>SENIOR UI/UX DESIGNER</h3>
                    <div className='md:flex gap-32 mb-4 justify-between mr-8'>
                        <h2 className='text-xl font-bold'>-2015 - 2017</h2>
                        <h2 className='text-xl font-bold'>-Jr. UI/UX Designer</h2>
                    </div>
                    <h3 className='text-4xl font-extrabold'>WEB DESIGN AND DEVELOPER</h3>
                </div>
            </div>
        </div>
    );
};

export default About;