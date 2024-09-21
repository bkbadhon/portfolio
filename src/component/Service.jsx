import React from 'react';
import img1 from '../../public/services-1.jpg'
import img2 from '../../public/services-2.jpg'
import img3 from '../../public/services-3.jpg'
import img4 from '../../public/services-4.jpg'

const Service = () => {
    return (
        <div id='Services' className='w-11/12 my-16 mx-auto'>

            <h2 className='italic font-bold p-2' data-aos="fade-up" data-aos-duration="1500">My Service</h2>
            <h2 className='text-5xl uppercase font-bold' data-aos="fade-up" data-aos-duration="1500">My Specialties</h2>

            <div className='my-8'>
                <div className="collapse collapse-plus" data-aos="fade-up" data-aos-duration="1500">
                    <input type="radio" name="my-accordion-3"/>
                    <div className='md:flex collapse-title justify-between'>
                    <h2 className='text-3xl text-[#642165] uppercase font-bold'>web design</h2>
                    <div className=" text-lg">Perspiciatis vero deleniti dolor assumenda voluptatum animi</div>
                    </div>
                    <div className="collapse-content md:flex items-center gap-8" data-aos="fade-up" data-aos-duration="2000">
                        <img className='w-80' data-aos="zoom-in-up" data-aos-duration="1500" src={img1} alt="" />
                        <div className='' data-aos="fade-right" data-aos-duration="1500">
                            <h2 className='text-3xl font-bold mb-4'>Web Design</h2>
                            <p>Perspiciatis vero deleniti dolor assumenda voluptatum animi ut repellendus sit dolorem asperiores! Porro ullam  pariatur neque beatae. Suscipit veniam fugiat vero, dolores perspiciatis asperiores, labore aspernatur quis enim  ex quibusdam laboriosam ipsam qui ullam nulla iusto blanditiis praesentium fugit quo officiis doloremque  provident! Dignissimos praesentium alias aliquid fugiat nihil tenetur itaque perspiciatis.</p>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-plus" data-aos="fade-up" data-aos-duration="2500">
                    <input type="radio" name="my-accordion-3"/>
                    <div className='md:flex collapse-title justify-between'>
                    <h2 className='text-3xl text-[#642165] uppercase font-bold'>UI/UX Design</h2>
                    <div className=" text-lg">Adipisci vitae ducimus voluptas veniam quidem, mollitia deserunt nihil</div>
                    </div>
                    <div className="collapse-content md:flex items-center gap-8">
                        <img className='w-80' src={img2} alt="" />
                        <div className=''>
                            <h2 className='text-3xl font-bold mb-4'>UI/UX Design</h2>
                            <p>Adipisci vitae ducimus voluptas veniam quidem, mollitia deserunt nihil, nulla cumque fugit laborum inventore similique, debitis neque tempore ipsa aspernatur? Necessitatibus vero ducimus molestiae doloribus reprehenderit modi vitae illum eos animi fugiat placeat blanditiis adipisci earum ab laborum id voluptates quo.</p>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-plus" data-aos="fade-up" data-aos-duration="2500">
                    <input type="radio" name="my-accordion-3"/>
                    <div className='md:flex collapse-title justify-between'>
                    <h2 className='text-3xl uppercase text-[#642165] font-bold'>Mobile Application</h2>
                    <div className=" text-lg">Consectetur adipisicing elit. Sapiente nulla repellendus consequuntur!</div>
                    </div>
                    <div className="collapse-content md:flex items-center gap-8">
                        <img className='w-80' src={img3} alt="" />
                        <div className=''>
                            <h2 className='text-3xl font-bold mb-4'>Mobile Application</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nulla repellendus consequuntur! Ipsa perferendis explicabo reiciendis, quos sint nobis praesentium officia consequuntur! Ullam maxime, provident placeat nesciunt eius distinctio ipsam modi vel nam iste ea neque quo numquam consequuntur odio porro quidem soluta amet eveniet. Similique eum cupiditate repellat ipsa.</p>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-plus" data-aos="fade-up" data-aos-duration="3000">
                    <input type="radio" name="my-accordion-3"/>
                    <div className='md:flex collapse-title justify-between'>
                    <h2 className='text-3xl text-[#642165] uppercase font-bold'>
                    User Research</h2>
                    <div className=" text-lg">Sint, mollitia accusamus odit inventore,</div>
                    </div>
                    <div className="collapse-content md:flex items-center gap-8">
                        <img className='w-80' src={img4} alt="" />
                        <div className=''>
                            <h2 className='text-3xl font-bold mb-4'>
                            User Research</h2>
                            <p>Sint, mollitia accusamus odit inventore, veritatis eos repellendus nihil voluptates voluptatibus adipisci sequi exercitationem optio labore perferendis aliquid cupiditate, nesciunt doloremque? Quidem totam, quas neque repudiandae amet rem harum inventore quo! Fuga ad esse excepturi optio, sint cum laborum.</p>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default Service;