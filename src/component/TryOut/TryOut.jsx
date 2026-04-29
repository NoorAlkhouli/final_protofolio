import { Link } from 'react-router-dom'
import lines1 from '../../../public/Lines1.svg'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TryOut = () => {
    return (
        <div className='px-1.5 md:px-20 w-full h-[40vh] mb-8 relative'>
            <div className='absolute z-0 top-0 left-1.5 md:left-10 w-[calc(100%-6px)] md:w-[calc(100%-5rem)] bg-secondary h-[40vh] rounded-none md:rounded-4xl -rotate-1'>

            </div>

            <div className='absolute overflow-hidden z-0 top-0 left-2 px-10 md:left-11 w-[calc(100%-7px)] md:w-[calc(100%-5.5rem)] bg-[#583FBC] h-[40vh] rounded-none md:rounded-4xl '>
                <div className='flex justify-evenly items-center h-[40vh] z-40 relative flex-col lg:flex-row'>
                    <div className='lg:w-1/2 flex flex-col justify-center items-start '>
                        <h1 className='text-3xl lg:text-5xl font-semibold text-primary-light mb-6 '>Try me out, risk free!</h1>
                        <p className=' text-[16px]  lg:text-[20px] font-semibold text-primary-light'>
                            If you’re not happy with the design after the first draft,<br />
                            I’ll refund your deposit, <span className='font-bold text-[20px] text-primary-light'>no questions asked</span>
                        </p>
                    </div>
                    <a href='#contact' className='flex justify-center items-center  gap-4 bg-secondary py-5 px-9 rounded-md text-primary-light '>
                        <span className='text-[16px] font-semibold'>Contact</span>
                        <FontAwesomeIcon icon={faArrowRight} className="cursor-pointer text-2xl m-0" />
                    </a>
                </div>
                <img src={lines1} className='absolute top-0 hidden lg:block rotate-1 left-0 w-full h-auto object-cover' alt="" />
            </div>
        </div>
    )
}

export default TryOut