import Header from "../component/Header/Header"
import dot from "../../public/dot.svg"
import About from "../component/About/About"
import Education from "./Education"
import TryOut from "../component/TryOut/TryOut"
import Card from "../component/Card/Card"
import Protofolio from "./Protofolio"
import Contact from "./Contact"
import Footer from "../component/Footer/Footer"
const Home = () => {
    return (
        <>
            <Header
                spanTitle="HEY!"
                title=" I’m Laura,  
                Frontend Developer"
                paragraph="Agency-quality Webflow websites with 
                the personal touch of a freelancer."
                file="Download CV"
            />
            <div className="w-full border-b mt-28 border-dashed flex justify-center items-center relative z-10">
                <div><img src={dot} alt="Dot Image" className=" absolute transform -translate-y-1/2 " /></div>
            </div>
            <About
                title="About me"
                paragraph="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra"
            />

            <Education />

            <TryOut />

            < Protofolio/>

            <Contact />
            

           

        </>
    )
}

export default Home
