import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ logo, pages, mode, toggleMode }) => {
    const [activeNav, setActiveNav] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (route) => {
        document.getElementById(route)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-primary-light/90 dark:bg-primary/90 backdrop-blur-sm">
            <div className="flex items-center justify-between mx-8 md:mx-14 lg:mx-20 pt-6 pb-5">
                <h1 className="font-display text-xl font-semibold z-50">
                    {logo}
                </h1>

                <ul
                    className={`
                        fixed top-0 right-0 w-full h-screen
                        bg-primary-light dark:bg-primary
                        flex flex-col items-center justify-start
                        gap-8 pt-28 pb-10
                        overflow-y-auto
                        transition-transform duration-300
                        z-40 opacity-95

                        md:opacity-100 md:static md:h-auto md:w-auto
                        md:flex-row md:justify-center md:pt-0 md:pb-0
                        md:overflow-visible md:bg-transparent
                        md:translate-x-0

                        ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
                    `}
                >
                    {pages.map((page, index) => (
                        <li
                            key={index}
                            className="font-semibold md:font-medium font-display text-lg"
                        >
                            <NavLink
                                to={
                                    page.type !== "scroll"
                                        ? page.url
                                        : page.url.replace("/", "#")
                                }
                                onClick={() => {
                                    setIsOpen(false);

                                    if (page.type === "scroll") {
                                        setActiveNav(page.url);
                                        scrollToSection(page.url.replace("/", ""));
                                    } else {
                                        setActiveNav("");
                                    }
                                }}
                                className={({ isActive }) => {
                                    if (page.type !== "scroll" && isActive) {
                                        return "text-secondary";
                                    }

                                    if (
                                        page.type === "scroll" &&
                                        activeNav === page.url
                                    ) {
                                        return "text-secondary";
                                    }

                                    return "";
                                }}
                            >
                                {page.content}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-5 z-50">
                    <FontAwesomeIcon
                        icon={mode.icon}
                        onClick={toggleMode}
                        className="cursor-pointer text-2xl"
                    />

                    <button
                        className="md:hidden text-xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <FontAwesomeIcon
                            icon={isOpen ? faXmark : faBars}
                            className={
                                isOpen
                                    ? "text-secondary scale-110"
                                    : "text-primary dark:text-primary-light"
                            }
                        />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;