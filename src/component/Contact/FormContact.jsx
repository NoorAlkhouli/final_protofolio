import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const FormContact = () => {
    const list = [
        {
            title: "Call Me",
            value: "+96396900000",
            icon: faPhone
        },
        {
            title: "Email me",
            value: "example@gmail.com",
            icon: faEnvelope
        },
        {
            title: "Address",
            value: "Damascus, syria",
            icon: faLocationDot
        }
    ]
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-14 mb-20 lg:mb-24 '>
            <div className='flex flex-col justify-between gap-14'>
                {
                    list.map((item, index) => {
                        return (
                            <div className='flex gap-5 ' key={item.value}>
                                <div className='w-15 h-14 rounded-lg bg-secondary flex justify-center items-center'>
                                    <FontAwesomeIcon icon={item.icon} className="cursor-pointer text-2xl m-0 text-primary-light" />
                                </div>
                                <div className=' flex flex-col gap-1'>
                                    <h3 className='text-[#92929D] text-lg'>{item.title}</h3>
                                    <h2 className='font-semibold text-lg'>{item.value}</h2>
                                </div>
                            </div>
                        );
                    })
                }



            </div>
            <div className='grid lg:col-span-2 gap-6.5'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Full name"
                        className="w-full p-3 border border-[#92929D] rounded-lg outline-none focus:border-secondary "
                    />
                    <input
                        type="email"
                        placeholder="Your email"
                        className="w-full p-3 border border-[#92929D] rounded-lg outline-none focus:border-secondary "
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        placeholder="Phone number"
                        className="w-full p-3 border border-[#92929D] rounded-lg outline-none focus:border-secondary "
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Message"
                        rows="6"
                        className="w-full p-3 border border-[#92929D] rounded-lg outline-none focus:border-secondary  resize-none"
                    ></textarea>
                </div>

                <div className="flex justify-start">
                    <button
                        type="submit"
                        className="bg-secondary hover:bg-[#379dd4] cursor-pointer text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
                    >
                        Send Message
                    </button>
                </div>


            </div>
        </div>
    )
}

export default FormContact