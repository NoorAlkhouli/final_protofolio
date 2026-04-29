import education2 from '../../public/education2.svg'
import education1 from '../../public/education1.svg'
import TimeLine from '../component/Education/TimeLine';


const Education = () => {
  const experiences = [
    {
      title: "Experience Designer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales"
    },
    {
      title: "Frontend Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales"
    },
    {
      title: "Experience Designer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales"
    },
    {
      title: "Frontend Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales"
    }
  ];
  return (
    <div className='px-1.5 md:px-20 relative mb-12 lg:mb-40' id='education'>
      <div className="relative">
        <div>
          <div className='flex justify-center items-center flex-col mb-4 w-full'>
            <h3 className='font-medium text-secondary text-[20px]'>Education and Experience</h3>
            <h1 className='font-semibold text-[30px] md:text-40px'>Education & Experience</h1>
          </div>

          <div className="xl:p-10 flex xl:flex-row flex-wrap xl:items-start items-center">
            {experiences.map((exp, index) => (
              <div key={index} className="w-full xl:w-1/2 overflow-hidden">
                <TimeLine
                  title={exp.title}
                  description={exp.description}
                  isLast={false}
                />
              </div>
            ))}
          </div>
        </div>

        <img
          src={education2}
          alt="education2"
          className="hidden lg:block absolute top-0 right-0 z-30 translate-x-1/4 translate-y-3 pointer-events-none select-none"
        />

        <img
          src={education1}
          alt="education1"
          className="hidden lg:block absolute bottom-0 left-0  z-30 -translate-x-12 translate-y-48 pointer-events-none select-none"
        />
      </div>
    </div>
  )
}

export default Education
