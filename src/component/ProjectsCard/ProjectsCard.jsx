import { faUpDownLeftRight, faUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons'
import image from '../../../public/Image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const ProjectsCard = ({ topic, date, paragraph }) => {
    const list = [
        {
            topic: 'Basic Languages : ',
            detail: 'Html5 , Css , Javascript'
        },
        {
            topic: 'Framework : ',
            detail: 'Bootstrap'
        },
        {
            topic: 'Libraries : ',
            detail: 'React.js'
        },
    ]
    const [showFullImage, setShowFullImage] = useState(false);

    const toggleImage = () => {
        setShowFullImage(!showFullImage);
    };
    return (
        <div className="mx-14 lg:mx-20 my-10  ">
            <div className="flex flex-col lg:flex-row justify-between gap-4 items-center rounded-xl overflow-hidden">

                <div className="w-full lg:w-1/2  relative group overflow-hidden cursor-pointer">
                    <img
                        src={image}
                        alt="Project Preview"
                        className="w-full h-full object-fill transition-transform duration-500 ease-in-out group-hover:scale-110"

                    />
                    <div className="absolute inset-0 bg-transparent backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">

                        <a
                            href="#"
                            className="w-14 h-14 bg-white/20 hover:bg-white/40 border border-white/50 rounded-full flex items-center justify-center transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                        >
                            <div className='w-8 h-8 text-black flex items-center justify-center'>
                                <FontAwesomeIcon
                                    icon={faUpRightFromSquare}
                                    className="cursor-pointer text-l m-0"
                                    size="lg"
                                    strokeWidth={2.5}
                                />
                            </div>
                        </a>

                        <button
                            onClick={toggleImage} 
                            className="w-14 h-14 bg-white/20 hover:bg-white/40 border border-white/50 rounded-full flex items-center justify-center transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75"
                        >
                            <div className="w-8 h-8 text-black flex items-center justify-center">
                                <FontAwesomeIcon icon={faUpDownLeftRight}
                                    className="cursor-pointer text-l m-0"
                                    size="lg"
                                    strokeWidth={2.5}
                                />
                            </div>
                        </button>

                    </div>
                </div>
                {showFullImage && (
                    <div
                        className="fixed inset-0 z-200 bg-transparent backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
                        onClick={toggleImage} 
                    >
                        <button
                            className="absolute top-10 right-10 text-white text-4xl hover:text-secondary transition-colors"
                            onClick={toggleImage}
                        >
                           
                        </button>
                        <img
                            src={image} 
                            alt="Full Preview"
                            className="max-w-[95%] max-h-[90vh] w-auto h-auto object-contain rounded-md shadow-2xl transform transition-transform duration-300 scale-100"
                            onClick={(e) => e.stopPropagation()} 
                        />
                    </div>
                )}
                <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-12 flex flex-col justify-center">


                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold  leading-tight">
                            {topic}
                        </h2>
                        <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-secondary flex items-center justify-center text-secondary font-serif italic">
                            <FontAwesomeIcon
                                icon={faUpRightFromSquare}
                                className="cursor-pointer text-l m-0"
                                size={12}
                                strokeWidth={2.5}
                            />
                        </div>
                    </div>

                    <p className="text-[#A6A6A6] font-medium text-sm mb-6">{date}</p>

                    <div className=" text-lg  md:text-base leading-relaxed mb-8 space-y-4">
                        <p>
                            {paragraph}
                        </p>
                    </div>

                    <div className="space-y-3 mb-8 text-sm md:text-base">
                        {
                            list.map((item,index) => {
                                return (
                                    <p  key={index}>
                                        <span className="font-bold">{item.topic}</span> {item.detail}
                                    </p>
                                )
                            })
                        }


                    </div>

                    <div className="mt-auto">
                        <button className="w-full md:w-max bg-secondary hover:bg-[#3a9acd] text-white font-semibold py-3 px-10 rounded-lg transition-all shadow-md active:scale-95">
                            Github Repo
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectsCard