import lines from "../../../public/lines.svg"


const Lines = () => {
    return (
        <div>
            <img
                src={lines}
                alt="Lines Image"
                className="absolute -bottom-20 left-0 w-full h-full object-contain object-center z-0 opacity-70"
            />
            <div
                className="w-1/3 h-1/2 absolute bottom-0 left-0 blur-[120px] opacity-100 dark:blur-[150px] dark:opacity-70"
                style={{
                    background: 'var(--header-gradient)',
                    borderRadius: '50%'
                }}
            >
            </div>
        </div>
    )
}

export default Lines