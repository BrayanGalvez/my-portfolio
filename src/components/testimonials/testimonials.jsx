import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Nostalhit Music Group, LLC',
    review: 'In the early and exhilarating chapters of Nostalhit Music Group, LLC, Brayan Galvez stands out as a visionary leader. As the Chief Executive Officer, he has infused innovative energy into our burgeoning company. His skills as a Data Scientist and Business Analyst, coupled with his expertise in programming and web development, have been pivotal in transforming how we approach music creation and distribution. Brayan`s strategic vision and commitment to excellence guide Nostalhit in this initial phase, marking the beginning of an exciting journey of growth and success in the digital music industry.',
    
  },
  {
    avatar: AVTR2,
    name: 'Green Forest Co. S.A.S',
    review: 'Within Green Forest Co. S.A.S, Brayan Galvez stands out as a committed Systems Analyst and Developer dedicated to innovation and technological progress. In his pivotal role, Brayan has showcased his ability to provide the company with meticulously developed digital tools and databases. His technical expertise has been instrumental in advancing Green Forest Co. S.A.S development strategy. While Brayan not only brings his technical skills but also a collaborative spirit, being a valuable member of the development team. With his clear vision and significant contributions, Brayan Galvez plays an essential role in steering Green Forest Co. S.A.S towards a technological and successful future.',
    
  },
  {
    avatar: AVTR3,
    name: 'Name3',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, animi rerum. Expedita suscipit dolore ex eligendi fugit doloremque autem, numquam accusantium sunt rerum nesciunt velit aperiam modi illo aspernatur commodi?',
    
  },
  {
    avatar: AVTR4,
    name: 'N',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, animi rerum. Expedita suscipit dolore ex eligendi fugit doloremque autem, numquam accusantium sunt rerum nesciunt velit aperiam modi illo aspernatur commodi?',
    
  }
]

function testimonials() {
  return(
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

     <Swiper className="container testimonials__container"
     // install Swiper modules
     modules={[Pagination]}
     spaceBetween={40}
     slidesPerView={1}
     pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                      <img src={avatar} alt="Avatar One" />
                  </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}


export default testimonials
