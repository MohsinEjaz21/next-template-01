import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

const data = [
  {
    imgUrl: 'https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634039725468-H44I8D4SQUZ6ONK32JY2/Frame+5.png?format=1000w',
    text01: 'Electric Cars',
    text02: 'low weight, power'
  },
  {
    imgUrl: 'https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035057033-EUFDFWKLA02GJ2BAUN69/Frame+2.png?format=1000w',
    text01: 'Electric Bikes',
    text02: 'high performance'
  },
  {
    imgUrl: 'https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035102964-STPUCV657Q4ILAWM5ID2/Frame+1.png?format=1000w',
    text01: 'Drones',
    text02: 'low weight, power'
  },
  {
    imgUrl: 'https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634035138932-DPVUF3IME3MFOXW79XC0/Frame+4.png?format=1000w',
    text01: 'Industrial vehicles',
    text02: 'longevity, sustainability'
  },
  {
    imgUrl: 'https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634039785060-CIKMULMME5DNQ3CJXJ25/Frame+6.png?format=1000w',
    text01: 'Residential',
    text02: 'longevity, sustainability'
  },
  {
    imgUrl: 'https://images.squarespace-cdn.com/content/v1/613f323315e7c403d0d6c265/1634039785060-CIKMULMME5DNQ3CJXJ25/Frame+6.png?format=1000w',
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
  modules: [Navigation],
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

