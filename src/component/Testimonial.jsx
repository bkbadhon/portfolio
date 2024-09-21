import React from 'react';
import img1 from '../../public/avatar-1.jpg'
import img2 from '../../public/avatar-2.jpg'
import brand1 from '../../public/brand-1.png'
import brand2 from '../../public/brand-2.png'
import brand3 from '../../public/brand-3.png'
import brand4 from '../../public/brand-4.png'





const Testimonial = () => {
 

    return (
        <div className='bg-gradient-to-r from-[#af2676] to-[#441b45] my-20 p-4 py-16'>

            <div data-aos="fade-right" data-aos-duration="1500">
                <h2 className='italic text-xl font-bold mb-4'>Testimonial</h2>
                <h2 className='text-5xl font-bold my-8 uppercase'>What they says</h2>
            </div>

         

            <div className="carousel  rounded-box">
                <div className="carousel-item ">
                    <div className='md:flex border-b-2 border-gray-200 py-8 w-11/12 gap-8'>
                        <div className='md:flex md:w-1/2 items-center gap-4' data-aos="fade-up" data-aos-duration="1500">
                            <div className='w-80'>
                                <h2 className='text-2xl my-8 font-bold'>"File storage made easy –  including powerful features  you won’t find anywhere else. Whether you're. "</h2>
                                <h3 className='font-bold'>-Ema Watson</h3>
                                <p className='text-gray-200'>Chief Executive Officer, Brazil</p>
                            </div>
                            <div className='md:w-56'>
                                <img className='' data-aos="zoom-in-up" data-aos-duration="1500" src={img1} alt="" />
                            </div>
                        </div>
                        <div className='md:flex md:w-1/2 items-center gap-4 ' data-aos="fade-up" data-aos-duration="1500">
                            <div className='w-80'>
                                <h2 className='text-2xl my-8 font-bold'>"File storage made easy –  including powerful features  you won’t find anywhere else. Whether you're. "</h2>
                                <h3 className='font-bold'>-Ema Watson</h3>
                                <p className='text-gray-200'>Chief Executive Officer, Brazil</p>
                            </div>
                            <div className='md:w-56
                        '>
                                <img className='' data-aos="zoom-in-up" data-aos-duration="1500" src={img2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-4 grid-cols-2 my-8' data-aos="fade-left" data-aos-duration="2500">
                <img src={brand1} alt="" />
                <img src={brand2} alt="" />
                <img src={brand3} alt="" />
                <img src={brand4} alt="" />
            </div>

        </div>
    );
};

export default Testimonial;


