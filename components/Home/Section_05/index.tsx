import { SwiperSlide } from "swiper/react";
import { Caresol } from "../../widgets/Caresol";
import { HomeDataSource } from "../HomeDataSource";

const data = HomeDataSource.section04.data;

function Section_05() {
  return (
    <section className="section_05">
      <h3 className="heading">Latest Publications</h3>
      <div className="container" >
        <Caresol>
          {data.map((e, i) => (
            <SwiperSlide key={i} className="curr_slide" >
              <img src={e.imgUrl} />
              <div className="content">
                <h4>{e.text01}</h4>
                <p>{e.text02}</p>
              </div>
            </SwiperSlide>
          ))}
        </Caresol>
      </div>
    </section>
  )
}

export default Section_05