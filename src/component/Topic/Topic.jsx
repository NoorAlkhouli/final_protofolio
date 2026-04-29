import {
    faChevronLeft, faChevronRight, faUpRightFromSquare
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Topic = ({
    topic,
    title,
    spanTitle,
    btn,
    slides,
    onPrev,
    onNext,
}) => {
    return (
        <div className="md:mb-12 my-5 px-5 lg:px-20 flex justify-between items-center flex-col md:flex-row gap-5">
            <div>
                <h3 className="font-medium text-secondary text-[20px] text-center md:text-start">
                    {topic}
                </h3>

                <h1 className="font-semibold whitespace-normal lg:whitespace-pre-line text-center md:text-start text-[25px] md:text-4xl">
                    {title}{" "}
                    <span className="text-[25px] md:text-4xl font-semibold text-secondary">
                        {spanTitle}
                    </span>
                </h1>
            </div>

            {btn && (
                <div className="flex flex-col self-stretch md:justify-end items-center">
                    <Link className="flex justify-center items-center gap-4 bg-secondary w-40 h-14 rounded-md text-primary-light">
                        <span className="text-[16px] font-semibold">
                            {btn}
                        </span>

                        <FontAwesomeIcon
                            icon={faUpRightFromSquare}
                            className="cursor-pointer text-l m-0"
                        />
                    </Link>
                </div>
            )}

            {slides && (
                <div className="flex self-stretch justify-center lg:justify-end items-center gap-4">
                    <button
                        type="button"
                        onClick={onPrev}
                        className="w-12 h-12 rounded-full border-2 border-secondary text-secondary bg-transparent flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-secondary hover:text-white"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    <button
                        type="button"
                        onClick={onNext}
                        className="w-12 h-12 rounded-full border-2 border-secondary bg-transparent text-secondary flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-secondary hover:text-white hover:shadow-lg hover:shadow-secondary/30"
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Topic;