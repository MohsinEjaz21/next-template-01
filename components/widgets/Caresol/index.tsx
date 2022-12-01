import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

const data = [
  {
    imgUrl: 'https://casstt.com/wp-content/uploads/2022/11/Amb_Jilani_W2.jpg',
    text01: 'Electric Cars',
    text02: 'low weight, power'
  },
  {
    imgUrl: 'https://casstt.com/wp-content/uploads/2022/11/AM-Ashfaque1.png',
    text01: 'Electric Bikes',
    text02: 'high performance'
  },
  {
    imgUrl: 'https://casstt.com/wp-content/uploads/2022/11/AM_Habib_2.jpg',
    text01: 'Drones',
    text02: 'low weight, power'
  },
  {
    imgUrl: 'https://casstt.com/wp-content/uploads/2022/11/AVM-Faheem1.png',
    text01: 'Industrial vehicles',
    text02: 'longevity, sustainability'
  },
  {
    imgUrl: 'https://casstt.com/wp-content/uploads/2022/11/Dr._Shamsi_.jpg',
    text01: 'Residential',
    text02: 'longevity, sustainability'
  },
  {
    imgUrl: 'https://casstt.com/wp-content/uploads/2022/11/Dr_Usman1.jpg',
    text01: 'Residential',
    text02: 'longevity, sustainability'
  },
]

const sliderProps = {
  // Default parameters
  // onSlideChange={() => console.log('slide change')}
  // onSwiper={(swiper) => console.log(swiper)}
  navigation: true,
  cssMode: true,
  spaceBetween: 50,
  slidesPerView: 3,
  modules: [Navigation, Autoplay],
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // Responsive breakpoints
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
}

export function Caresol() {
  return (
    <>
      <Swiper {...sliderProps}>
        {data.map((e, i) => (
          <SwiperSlide key={i} >
            <img src={e.imgUrl} />
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  )
}

