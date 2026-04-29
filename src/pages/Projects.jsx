import React, { useState } from "react";
import ProjectsCard from "../component/ProjectsCard/ProjectsCard";
import dot from "../../public/dot.svg";
import Topic from "../component/Topic/Topic";
import Card from "../component/Card/Card";

const Projects = () => {
  const cards = [
    {
      topic: "Educational Platform1",
      title: "Html-Css3-Vanilla javascript",
    },
    {
      topic: "Educational Platform2",
      title: "Html-Css3-Vanilla javascript",
    },
    {
      topic: "Educational Platform3",
      title: "Html-Css3-Vanilla javascript",
    },
    {
      topic: "Educational Platform4",
      title: "Html-Css3-Vanilla javascript",
    },
    {
      topic: "Educational Platform5",
      title: "Html-Css3-Vanilla javascript",
    }, 
    {
      topic: "Educational Platform6",
      title: "Html-Css3-Vanilla javascript",
    },
    {
      topic: "Educational Platform7",
      title: "Html-Css3-Vanilla javascript",
    },
    {
      topic: "Educational Platform8",
      title: "Html-Css3-Vanilla javascript",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerView = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + cardsPerView >= cards.length) {
        return 0;
      }

      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return Math.max(cards.length - cardsPerView, 0);
      }

      return prevIndex - 1;
    });
  };

  const visibleCards = cards.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <div>
      <ProjectsCard
        topic="Educational Platform"
        date="12-5-2024"
        paragraph="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. 
        Aliquet donec morbi convallis pretium. Turpis tempus pharetra."
      />

      <div className="w-full border-b mt-28 border-dashed flex justify-center items-center relative z-10">
        <div>
          <img
            src={dot}
            alt="Dot Image"
            className="absolute transform -translate-y-1/2"
          />
        </div>
      </div>

      <Topic
        topic="Portfolio"
        title="The Best "
        spanTitle="Projects"
        slides={true}
        onPrev={prevSlide}
        onNext={nextSlide}
      />

      <div className="flex justify-between px-8 mb-16 flex-col lg:flex-row gap-5 md:gap-0">
        {visibleCards.map((card, index) => {
          return (
            <Card
              key={index}
              topic={card.topic}
              title={card.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;