import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
                fixed right-8 bottom-8 z-50
                w-12 h-12 rounded-xl
                bg-secondary text-white
                flex items-center justify-center
                shadow-lg shadow-black/20
                transition-all duration-300
                hover:scale-110 
                cursor-pointer
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}
            `}
            aria-label="Scroll to top"
        >
            <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
        </button>
    );
};

export default ScrollToTop;