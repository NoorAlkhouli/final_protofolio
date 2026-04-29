import about from "../../../public/about.svg"
import about1 from "../../../public/about1.svg"
import SkillBars from "./SkillBar"
const About = ({ title, paragraph, topic }) => {
    return (
        <div className={`px-1.5 md:px-20  flex xl:justify-between justify-center flex-wrap items-center  gap-6 py-10`} id="about">
            <img src={about} alt="About Image" className="dark:hidden block" />
            <img src={about1} alt="About Image" className="dark:block hidden" />
            <div className={`flex flex-col justify-start md:justify-center xl:items-start items-center h-full xl:w-1/2 w-full gap-8 `}>
                <h1 className="text-5xl font-semibold ">{title}</h1>
                <p className="md:text-lg whitespace-pre-line md:w-lg font-normal text-center lg:text-start" >{paragraph}</p>
                <SkillBars />
            </div>

        </div >
    )
}

export default About



