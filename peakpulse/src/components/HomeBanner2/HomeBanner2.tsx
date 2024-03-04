import React, { useRef, useState } from 'react';
import './HomeBanner2.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
const HomeBanner2 = () => {

    const [workouts, setWorkouts] = React.useState<any[] | null>(null)

    const getworkouts = async () => {
        let data: any = [
            {
              type: 'Chest',
              imageUrl: 'https://images.unsplash.com/photo-1652363722833-509b3aac287b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlbmNoJTIwcHJlc3N8ZW58MHx8MHx8fDA%3D',
              durationInMin: 30
            },
            {
              type: 'Abs',
              imageUrl: 'https://plus.unsplash.com/premium_photo-1664477098603-042afd7d70de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWJzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D',
              durationInMin: 90
            },
            {
              type: 'Shoulder',
              imageUrl: 'https://images.unsplash.com/photo-1704223523449-ca3925f89dcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvdWxkZXIlMjBwcmVzcyUyMHdvcmtvdXR8ZW58MHx8MHx8fDA%3D',
              durationInMin: 40
            },
            {
              type: 'Back',
              imageUrl: 'https://images.unsplash.com/photo-1599577456698-e1e9ae4f4e5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFjayUyMHdvcmtvdXR8ZW58MHx8MHx8fDA%3D',
              durationInMin: 70
            },
            {
              type: 'Biceps',
              imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmljZXBzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D',
              durationInMin: 50
            },
            {
              type: 'Triceps',
              imageUrl: 'https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJpY2VwcyUyMHdvcmtvdXR8ZW58MHx8MHx8fDA%3D',
              durationInMin: 60
            },
      
            {
              type: 'Legs',
              imageUrl: 'https://images.unsplash.com/photo-1541600383005-565c949cf777?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3F1YXRzfGVufDB8fDB8fHww',
              durationInMin: 80
            },
      
            {
              type: 'Cardio',
              imageUrl: 'https://images.unsplash.com/photo-1614691771330-13f4e0deec54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyZGlvfGVufDB8fDB8fHww',
              durationInMin: 100
            },
            {
              type: 'Forearms',
              imageUrl: 'https://images.unsplash.com/photo-1591940742878-13aba4b7a34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZWFybXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
              durationInMin: 110
            }
          ]
          setWorkouts(data)
    }

    React.useEffect(() => {
        getworkouts()
    }, [])
    
    return (
    <div>
        <h1 className='mainhead1'>Workouts</h1>

        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          workouts && workouts.map((item, index) => {
            return (
              <SwiperSlide key={index} >
                <div className='swiper-slide'
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                  }}
                  onClick={() => {
                    window.location.href = `/workout/${item.type}`
                  }}
                >
                  <div className='swiper-slide-content'>
                    <h2>{item.type}</h2>
                    <p>{item.durationInMin} min</p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default HomeBanner2