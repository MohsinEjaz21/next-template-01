import { HomeDataSource } from "../HomeDataSource";

const data = HomeDataSource.section02;

function Section_02() {
  return (
    <section className="section_02">
      <div className="frame_01">
        <h3>{data.text01}</h3>
        <h2>{data.text02}</h2>
        <p>{data.text03} </p>
      </div>
      <div className="frame_02">
        <img src={data.image} alt="" />
      </div>
    </section>
  )
}

export default Section_02