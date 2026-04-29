import header1 from "../../../public/header1.png"
import lines from "../../../public/lines.svg"

const Header = ({ spanTitle, title, paragraph, file }) => {
    return (
        <div className="w-full relative overflow-hidden lg:overflow-visible py-10">
            <div className="px-6 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row justify-between items-center gap-10 relative z-10">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-start justify-center w-full lg:w-1/2 gap-6 lg:gap-8 mt-5 lg:mt-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold whitespace-pre-line leading-tight">
                        <span className="block lg:inline text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed">
                            {spanTitle}
                        </span>
                        {title}
                    </h1>
                    <p className="text-base md:text-lg whitespace-pre-line max-w-xl">
                        {paragraph}
                    </p>
                    <button className="bg-[#FFFFFF99] text-primary py-2.5 px-6 mt-2 lg:mt-5 rounded-md cursor-pointer font-semibold text-[15px] dark:bg-[#0C96E299] dark:text-white transition-all hover:scale-105 active:scale-95">
                        {file}
                    </button>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
                    <img
                        src={header1}
                        alt="Header Image"
                        className="relative z-20 w-3/4 md:w-2/3 lg:w-full h-auto max-w-md lg:max-w-none"
                    />
                </div>
            </div>
            <img
                src={lines}
                alt="Lines Image"
                className="absolute -bottom-10 lg:-bottom-20 left-0 w-full h-full object-cover lg:object-contain object-center z-0 opacity-40 lg:opacity-70 pointer-events-none"
            />

            <div
                className="w-1/2 lg:w-1/3 h-1/4 lg:h-1/2 absolute bottom-0 left-0 blur-[80px] lg:blur-[150px] opacity-70 dark:opacity-50"
                style={{
                    background: 'var(--header-gradient)',
                    borderRadius: '50%'
                }}
            >
            </div>

        </div>
    )
}

export default Header