import { Autoplay, Navigation } from "swiper";
import { Swiper } from 'swiper/react';


const sliderProps = {
  // Default parameters
  // onSlideChange={() => console.log('slide change')}
  // onSwiper={(swiper) => console.log(swiper)}
  navigation: true,
  cssMode: true,
  spaceBetween: 50,
  slidesPerView: 3,
  modules: [Navigation, Autoplay],
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
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

export function Caresol({ children }) {
  return (
    <>
      <Swiper {...sliderProps}>
        {children}
      </Swiper>

    </>
  )
}

