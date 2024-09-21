import React from 'react';
import './banner.css'
import { IoIosArrowRoundForward, IoIosPhonePortrait } from 'react-icons/io';
import { IoMail } from 'react-icons/io5';
import img from '../../public/home-banner.png'

const Banner = () => {
    return (
        <div id='Home' className='py-4 px-2 md:flex justify-around'>
            <div >
                <h2 className='uppercase name text-6xl font-bold' data-aos="fade-down" data-aos-duration="1000">My name <br />
                is Lilon</h2>
                <h2 className='webkit uppercase font-bold text-7xl' data-aos="fade-left" data-aos-duration="1500">Macwan...</h2>
                <h3 className='font-semibold text-3xl my-4' data-aos="fade-right" data-aos-duration="1500">Web Designer <span className='font-thin'>based in </span>USA</h3>
                <button className='bg-gradient-to-r from-[#af2676] to-[#441b45] flex gap-2 p-[12px] my-8 px-8 font-semibold' data-aos="fade-left" data-aos-duration="1500"><a className='flex items-center' href="#Contact">Work with ME <IoIosArrowRoundForward  className='-rotate-45 text-2xl'/></a> </button>
                <div className='md:flex gap-8' data-aos="fade-up" data-aos-duration="1500">
                    <h2 className='flex gap-2 my-4 items-center text-xl'><IoIosPhonePortrait />+123 45 666 7788</h2>
                    <h3 className='flex gap-2 items-center text-xl'><IoMail />mccandesigner@gmail.com</h3>
                </div>
            </div>
            <div className='flex'>
                <img className='w-[400px]' data-aos="zoom-in-up" data-aos-duration="1500" src={img} alt="" />
            </div>
                

        </div>
    );
};

export default Banner;