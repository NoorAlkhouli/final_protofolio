import React from 'react'
import Card from '../component/Card/Card'
import Topic from '../component/Topic/Topic'

const Protofolio = () => {
    const cards = [
        {
            topic: 'Educational Platform',
            title: 'Html-Css3-Vanilla javascript'
        },
        {
            topic: 'Educational Platform',
            title: 'Html-Css3-Vanilla javascript'
        },
        {
            topic: 'Educational Platform',
            title: 'Html-Css3-Vanilla javascript'
        },
        {
            topic: 'Educational Platform',
            title: 'Html-Css3-Vanilla javascript'
        },
        {
            topic: 'Educational Platform',
            title: 'Html-Css3-Vanilla javascript'
        },
        {
            topic: 'Educational Platform',
            title: 'Html-Css3-Vanilla javascript'
        },
    ]
    return (

        <div className='flex flex-col w-full'>
            <Topic
                topic="Portfolio"
                title="My Creative Works 
                        Latest"
                spanTitle="Projects"
                btn="View Github "
            />

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 lg:p-10 p-5 w-full">
                {
                    cards.map((card, index) => {
                        return (
                            <Card

                                topic={card.topic}
                                title={card.title}
                            />
                        )
                    })
                }

            </div>
        </div>




    )
}

export default Protofolio