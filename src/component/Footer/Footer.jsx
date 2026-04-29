
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'

const Footer = () => {
    const list = [
        {
            icon: faFacebookF,
            link: "#"
        },
        {
            icon: faTwitter,
            link: "#"
        },
        {
            icon: faInstagram,
            link: "#"
        },
        {
            icon: faLinkedinIn,
            link: "#"
        },
    ]
    return (
        <div className='md:px-5 px-1 pb-5 '>
            <div className='border-t pt-7 md:pt-0 border-[#BEC0BF]  md:h-12 h-auto flex  items-end  justify-between flex-wrap '>
                <h4 className='text-sm'>@ 2024. All Rights Reserved</h4>
                <h4 className='text-sm'>Develpoment by Lorina</h4>
                <div className='flex gap-3 mt-3 w-full md:w-auto justify-center md:justify-start'>
                    {
                        list.map((social, index) => {

                            return (
                                <div className='rounded-full bg-secondary w-7 h-7 flex justify-center items-center'>
                                    <a href={social.link} target='_blank'><FontAwesomeIcon icon={social.icon} className='text-primary-light' /></a>
                                </div>
                            )
                        })
                    }
                </div>


            </div>
        </div>
    )
}

export default Footer