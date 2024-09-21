import React from 'react';
import blog1 from '../../public/blog-1.jpg'
import blog2 from '../../public/blog-2.jpg'
import blog3 from '../../public/blog-3.jpg'
import blog4 from '../../public/blog-4.jpg'
import { CiTwitter } from 'react-icons/ci';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';

const Blog = () => {
    return (
        <div id='Blog' className='w-11/12 my-8 mx-auto'>
            <div data-aos="fade-up" data-aos-duration="1500">
                <h2 className='
                italic text-xl font-bold'>Our Blogs</h2>
                <h2 className='text-5xl uppercase font-bold my-8'>Our Latest Update</h2>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>
                <div onClick={() => document.getElementById('modal_1').showModal()} className='border-b-2 border-gray-700 py-2'>
                    <img className='hover:scale-105 duration-300' data-aos="zoom-in-up" data-aos-duration="1500" src={blog1} alt="" />
                    <div className='my-4' data-aos="fade-up" data-aos-duration="1500">
                        <h2 className='text-lg mb-4 font-bold'>12 July, 2022</h2>
                        <h2 className='text-2xl font-bold'>12 unique example of portfolio websites</h2>
                    </div>
                </div>
                <dialog id="modal_1" className="modal">
                    <div className="modal-box bg-black text-white w-11/12 max-w-5xl">
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="text-xl px-2 my-4">X</button>
                            </form>
                        </div>
                        <div>
                            <img className='w-full' src={blog1} alt="" />
                            <h2 className='text-lg mb-4 font-bold'>12 July, 2022</h2>
                            <h2 className='text-3xl font-bold'>12 unique example of portfolio websites</h2>
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
                <div onClick={() => document.getElementById('modal_2').showModal()} className='border-b-2 border-gray-700 py-2'>
                    <img className='hover:scale-105 duration-300' data-aos="zoom-in-up" data-aos-duration="1500" src={blog2} alt="" />
                    <div className='my-4' data-aos="fade-up" data-aos-duration="1500">
                        <h2 className='text-lg mb-4 font-bold'>12 July, 2022</h2>
                        <h2 className='text-2xl font-bold'>11 unique example of portfolio websites</h2>
                    </div>
                </div>
                <dialog id="modal_2" className="modal">
                    <div className="modal-box bg-black text-white w-11/12 max-w-5xl">
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="text-xl px-2 my-4">X</button>
                            </form>
                        </div>
                        <div>
                            <img className='w-full' src={blog2} alt="" />
                            <h2 className='text-lg mb-4 font-bold'>12 July, 2022</h2>
                            <h2 className='text-3xl font-bold'>12 unique example of portfolio websites</h2>
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
                <div onClick={() => document.getElementById('modal_3').showModal()} className='border-b-2 border-gray-700 py-2'>
                    <img className='hover:scale-105 duration-300' data-aos="zoom-in-up" data-aos-duration="1500" src={blog3} alt="" />
                    <div className='my-4' data-aos="fade-up" data-aos-duration="1500">
                        <h2 className='text-lg mb-4 font-bold'>10 July, 2022</h2>
                        <h2 className='text-2xl font-bold'>12 unique example of portfolio websites</h2>
                    </div>
                </div>
                <dialog id="modal_3" className="modal">
                    <div className="modal-box bg-black text-white w-11/12 max-w-5xl">
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="text-xl px-2 my-4">X</button>
                            </form>
                        </div>
                        <div>
                            <img className='w-full' src={blog3} alt="" />
                            <h2 className='text-lg mb-4 font-bold'>12 July, 2022</h2>
                            <h2 className='text-3xl font-bold'>12 unique example of portfolio websites</h2>
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
                <div onClick={() => document.getElementById('modal_4').showModal()} className='border-b-2 border-gray-700 py-2'>
                    <img className='hover:scale-105 duration-300' data-aos="zoom-in-up" data-aos-duration="1500" src={blog4} alt="" />
                    <div className='my-4' data-aos="fade-up" data-aos-duration="1500">
                        <h2 className='text-lg mb-4 font-bold'>10 July, 2022</h2>
                        <h2 className='text-2xl font-bold'>12 unique example of portfolio websites</h2>
                    </div>
                </div>
                <dialog id="modal_4" className="modal">
                    <div className="modal-box bg-black text-white w-11/12 max-w-5xl">
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="text-xl px-2 my-4">X</button>
                            </form>
                        </div>
                        <div>
                            <img className='w-full' src={blog4} alt="" />
                            <h2 className='text-lg mb-4 font-bold'>12 July, 2022</h2>
                            <h2 className='text-3xl font-bold'>12 unique example of portfolio websites</h2>
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
    );
};

export default Blog;