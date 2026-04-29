import React from 'react'
import Topic from '../component/Topic/Topic'
import FormContact from '../component/Contact/FormContact'

const Contact = () => {
  return (
    <div id='contact'>
      <Topic 
        topic="Contact"
        title="Let’s Discuss Your"
        spanTitle="Projects"
      />
      <div className='px-5 lg:px-20'>
        <FormContact />
     </div>
    </div>
  )
}

export default Contact