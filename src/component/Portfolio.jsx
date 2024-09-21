import React from 'react';
import img1 from '../../public/services-1.jpg'
import img2 from '../../public/services-2.jpg'
import img3 from '../../public/services-3.jpg'
import img4 from '../../public/services-4.jpg'
import { IoIosArrowRoundForward } from 'react-icons/io';
import { CiTwitter } from 'react-icons/ci';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import Testimonial from './Testimonial';

const Portfolio = () => {
    return (
        <div id='Portfolio' className='w-11/12 my-16 mx-auto'>
            <h2 className='italic font-semibold p-2' data-aos="fade-right" data-aos-duration="1500">My Works</h2>
            <h2 className='text-5xl uppercase font-bold' data-aos="fade-up" data-aos-duration="1500">RECENT PROJECT</h2>

            <div className='my-16 grid md:grid-cols-2 grid-cols-1 justify-between gap-12'>
                <div className='flex gap-4'>
                    <img className='w-56' data-aos="zoom-in-up" data-aos-duration="1500" src={img1} alt="" />
                    <div className='flex flex-col justify-between'>
                        <div data-aos="fade-up" data-aos-duration="1500">
                            <h2 className='font-semibold'>UX case study</h2>
                            <h3 className='text-2xl font-bold'>Processor Research</h3>
                        </div>
                        <button onClick={() => document.getElementById('my_modal_1').showModal()}><IoIosArrowRoundForward className='-rotate-45 text-4xl' /></button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box bg-black text-white w-11/12 max-w-5xl">
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="text-xl px-2 my-4">X</button>
                                    </form>
                                </div>
                                <div >
                                    <img className='w-full' src={img1} alt="" />
                                    <h2 className='font-semibold'>UX case study</h2>
                                    <h3 className='text-2xl font-bold'>Processor Research</h3>
                                    <p className='border-b-2 border-secondary p-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div className='flex items-center justify-between my-8'>
                                        <div>
                                            <h2>Share</h2>
                                        </div>
                                        <div className='flex ml-4 mb-8 gap-4'>
                                            <a className='bg-white p-2 rounded-full hover:bg-pink-500 hover:text-white duration-500 text-black' href=""> <CiTwitter /></a>
                                            <a className='bg-white p-2 rounded-full hover:bg-pink-500 hover:text-white duration-500 text-black' href=""> <FaInstagram /></a>
                                            <a className='bg-white p-2 rounded-full hover:bg-pink-500 hover:text-white duration-500 text-black' href=""> <FaFacebook /></a>
                                            <a className='bg-white p-2 rounded-full hover:bg-pink-500 hover:text-white duration-500 text-black' href=""> <FaPinterest /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </dialog>

                    </div>
                </div>
                <div className='flex gap-4'>
                    <img className='w-56' data-aos="zoom-in-up" data-aos-duration="1500" src={img2} alt="" />
                    <div className='flex flex-col justify-between'>
                        <div data-aos="fade-up" data-aos-duration="1500">
                            <h2 className='font-semibold'>UX case study</h2>
                            <h3 className='text-2xl font-bold'>Artificial Research</h3>
                        </div>
                        <button onClick={() => document.getElementById('my_modal_2').showModal()}><IoIosArrowRoundForward className='-rotate-45 text-4xl' /></button>
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box bg-black text-white w-11/12 max-w-5xl">
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="text-xl px-2 my-4">X</button>
                                    </form>
                                </div>
                                <div>
                                    <img className='w-full' src={img2} alt="" />
                                    <h2 className='font-semibold'>UX case study</h2>
                                    <h3 className='text-2xl font-bold'>Artificial Research</h3>
                                    <p className='border-b-2 border-secondary p-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div className='flex items-center justify-between my-8'>
                                        <div>
                                            <h2>Share</h2>
                                        </div>
                                        <div className='flex ml-4 mb-8 gap-4'>
                                            <a className='bg-white p-2 rounded-full hover:bg-pink-500 hover:text-white duration-500 text-black' href=""> <CiTwitter /></a>
                                            <a className='bg-white p-2 rounded-full hover:bg-pink-500 hover:text-white duration-500 text-black' href=""> <FaInstagram /></a>
                                            <a className='bg-white p-2 rounded-full hover:bg-pink-500 hover:text-white duration-500 text-black' href=""> <FaFacebook /></a>
                                            <a className='bg-white p-2 rounded-full hover:bg-pink-500 hover:text-white duration-500 text-black' href=""> <FaPinterest /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img className='w-56' data-aos="zoom-in-up" data-aos-duration="1500" src={img3} alt="" />
                    <div className='flex flex-col justify-between'>
                        <div data-aos="fade-up" data-aos-duration="1500">
                            <h2 className='font-semibold'>UX case study</h2>
                            <h3 className='text-2xl font-bold'>Website Research</h3>
                        </div>
                        <button onClick={() => document.getElementById('my_modal_3').showModal()}><IoIosArrowRoundForward className='-rotate-45 text-4xl' /></button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box bg-black text-white w-11/12 max-w-5xl">
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="text-xl px-2 my-4">X</button>
                                    </form>
                                </div>
                                <div>
                                    <img className='w-full' src={img3} alt="" />
                                    <h2 className='font-semibold'>UX case study</h2>
                                    <h3 className='text-2xl font-bold'>Website Research</h3>
                                    <p className='border-b-2 border-secondary p-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div className='flex items-center justify-between my-8'>
                                        <div>
                                            <h2>Share</h2>
                                        </div>
                                        <div className='flex ml-4 mb-8 gap-4'>
                                            <a className='bg-white p-2 rounded-full hover:bg-pink-500 hover:text-white duration-500 text-black' href=""> <CiTwitter /></a>
                                            <a className='bg-white p-2 rounded-full hover:bg-pink-500 hover:text-white duration-500 text-black' href=""> <FaInstagram /></a>
                                            <a className='bg-white p-2 rounded-full hover:bg-pink-500 hover:text-white duration-500 text-black' href=""> <FaFacebook /></a>
                                            <a className='bg-white p-2 rounded-full hover:bg-pink-500 hover:text-white duration-500 text-black' href=""> <FaPinterest /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img className='w-56' data-aos="zoom-in-up" data-aos-duration="1500" src={img4} alt="" />
                    <div className='flex flex-col justify-between'>
                        <div data-aos="fade-up" data-aos-duration="1500">
                            <h2 className='font-semibold'>UX case study</h2>
                            <h3 className='text-2xl font-bold'>Robotics Research</h3>
                        </div>
                        <button onClick={() => document.getElementById('my_modal_4').showModal()}><IoIosArrowRoundForward className='-rotate-45 text-4xl' /></button>
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box bg-black text-white w-11/12 max-w-5xl">
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="text-xl px-2 my-4">X</button>
                                    </form>
                                </div>
                                <div>
                                    <img className='w-full' src={img4} alt="" />
                                    <h2 className='font-semibold'>UX case study</h2>
                                    <h3 className='text-2xl font-bold'>Robotics Research</h3>
                                    <p className='border-b-2 border-secondary p-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div className='flex items-center justify-between my-8'>
                                        <div>
                                            <h2>Share</h2>
                                        </div>
                                        <div className='flex ml-4 mb-8 gap-4'>
                                            <a className='bg-white p-2 rounded-full hover:bg-pink-500 hover:text-white duration-500 text-black' href=""> <CiTwitter /></a>
                                            <a className='bg-white p-2 rounded-full hover:bg-pink-500 hover:text-white duration-500 text-black' href=""> <FaInstagram /></a>
                                            <a className='bg-white p-2 rounded-full hover:bg-pink-500 hover:text-white duration-500 text-black' href=""> <FaFacebook /></a>
                                            <a className='bg-white p-2 rounded-full hover:bg-pink-500 hover:text-white duration-500 text-black' href=""> <FaPinterest /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
            <Testimonial>

            </Testimonial>
        </div>
    );
};

export default Portfolio;