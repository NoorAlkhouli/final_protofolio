
const TimeLine = ({ title, description, isLast }) => {
    return (
        <div className="flex gap-x-4 w-full">
            <div className="relative flex flex-col items-center">

                <div className="relative z-10  py-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="11" fill="none" />
                        <circle
                            cx="12" cy="12" r="7"
                            className="stroke-primary dark:stroke-primary-light" 
                            strokeWidth="1.5"
                            strokeDasharray="4 6.99"
                            strokeDashoffset="2"
                            strokeLinecap="round"
                        />

                        <circle cx="12" cy="12" r="4.5" fill="#0ea5e9" />
                    </svg>
                </div>

                <div className={`absolute top-8 left-1/2 -translate-x-px w-0 border-l-2 border-dashed border-primary dark:border-primary-light z-0 ${isLast ? 'h-2/4' : 'h-full'}`}></div>
            </div>

            <div className="pb-10 pt-1 w-full">
                <h3 className="text-xl font-bold  mb-1">{title}</h3>
                <p className="text-slate-400 leading-relaxed xl:max-w-sm w-full">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default TimeLine