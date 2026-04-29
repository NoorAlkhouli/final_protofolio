import { Outlet } from "react-router-dom"
import NavBar from "../component/NavBar/NavBar"
import { useState } from "react"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import Footer from "../component/Footer/Footer"
import ScrollToTop from "../component/ScrollToTop/ScrollToTop"


const Root = () => {
    const pages = [
        {
            url: '',
            content: "Home",
            type: "page"

        },
        {
            url: '/about',
            content: "About me",
            type: "scroll"
        },
        {
            url: '/education',
            content: "Education",
            type: "scroll"
        },
        {
            url: '/projects',
            content: "Projects",
            type: "page"
        },
        {
            url: '/contact',
            content: "Contact",
            type: "scroll"
        },
    ]


    const [mode, setMode] = useState({
        dark: false,
        icon: faMoon,
    })
    const toggleMode = () => {
        setMode({
            dark: !mode.dark,
            icon: mode.dark ? faMoon : faSun
        })
    }

    return (
        <div className={` pt-24 min-h-screen bg-primary-light dark:bg-primary text-primary dark:text-primary-light ${mode.dark ? "dark" : ""}`} >
            <NavBar
                logo="Laura"
                pages={pages}
                mode={mode}
                toggleMode={toggleMode}
            />
            <Outlet />
            <ScrollToTop/>
            <Footer />
        </div>
    )
}

export default Root