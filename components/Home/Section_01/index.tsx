import BtnPrimary from "@/components/widgets/Buttons/BtnPrimary";
import { HomeDataSource } from "../HomeDataSource";

const data = HomeDataSource.section01;
function Section_01() {
  return (
    <section className="section_01">
      <div className="frame_01">
        <h3>{data.text01}</h3>
        <h2>{data.text02}</h2>
        <p>{data.text03} </p>
        <BtnPrimary label={data.btnText} />
      </div>
      <div className="frame_02">
        <img src={data.image} alt="" />
      </div>
    </section>
  )
}

export default Section_01