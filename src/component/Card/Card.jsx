import React from 'react'
import Topic from '../Topic/Topic'
import image from '../../../public/Image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Card = ({ title, topic }) => {
    return (
        <>
            <div className="lg:mx-12.5 max-w-full  lg:max-w-92.5 group cursor-pointer ">
                <div className="relative overflow-hidden rounded-md bg-gray-100 mb-4 transition-all duration-300 group-hover:shadow-xl">
                    <img
                        src={image}
                        alt="Educational Platform"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                <div className="flex justify-between  px-1 ">
                    <div>
                        <h3 className="text-[22px] font-semibold mb-1">
                            {topic}
                        </h3>
                        <p className=" text-[16px] font-normal">
                            {title}
                        </p>
                    </div>
                    <div className="self-stretch flex items-end">
                        <div className="flex items-center justify-center bg-white border-2 w-10 h-10 border-secondary rounded-full text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                            <Link
                                to={'/projects'}
                            >
                                <FontAwesomeIcon

                                    icon={faUpRightFromSquare}
                                    className="cursor-pointer text-l m-0"
                                    size={12}
                                    strokeWidth={2.5}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card