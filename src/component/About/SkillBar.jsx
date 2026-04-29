const SkillBars = () => {
    const skills = [
        { name: "HTML5", value: 90 },
        { name: "CSS3", value: 85 },
        { name: "Javascript", value: 95 },
        { name: "React", value: 90 },
    ];

    return (
        <div className="w-full">
            <div className="w-full  bg-transparent">
                <div className="space-y-2.5">
                    {skills.map((skill) => (
                        <div key={skill.name} className="relative">
                            <div className="mb-2 text-[22px] font-extrabold tracking-wide">
                                {skill.name}
                            </div>

                            <div className="relative pt-4">
                                <div className="h-2 w-full rounded-full bg-[#EDECEC] dark:bg-primary-light overflow-visible">
                                    <div
                                        className={`h-2 rounded-full bg-secondary`}
                                        style={{ width: `${skill.value}%` }}
                                    />
                                </div>

                                <div
                                    className="absolute top-1/3 -translate-x-1/2 -translate-y-1/2"
                                    style={{ left: `${skill.value}%` }}
                                >
                                    <div className="relative flex flex-col items-center">
                                        <div className="mb-2 rounded-sm bg-secondary px-1.5 py-0.5 text-[10px] font-bold leading-none text-white shadow-sm">
                                            {skill.value}%
                                        </div>
                                        <div className="-mt-2 h-0 w-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-secondary" />
                                        <div className="mt-1 h-5 w-5 rounded-full border-[3px] border-secondary bg-white shadow-[0_0_0_2px_rgba(22,151,246,0.08)]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default SkillBars