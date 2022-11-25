import BtnPrimary from "@/components/widgets/Buttons/BtnPrimary";
import { HomeDataSource } from "../HomeDataSource";

const data = HomeDataSource.section01;
function Section_01() {
  return (
    <section className="section_01" data-scroll-section>
      <div data-scroll data-scroll-speed="1" className="frame_01">
        <h4 >{data.text01}</h4>
        <h2 >{data.text02}</h2>
        <p >{data.text03} </p>
        <BtnPrimary label={data.btnText} />
      </div>
      <div className="frame_02" data-scroll data-scroll-speed="1">
        <div className="iframe-container">
          <iframe
            className="video"
            title="Youtube player"
            frameBorder={0}
            sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
            allowFullScreen
            src={data.vedioUrl}>
          </iframe>
        </div>

        {/* <iframe className="video" src="https://www.youtube.com/embed/videoseries?list=PLUl4u3cNGP63gFHB6xb-kVBiQHYe_4hSi&rel=0" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> */}

      </div>
    </section >
  )
}

export default Section_01
{/* <img src={data.image} alt="" /> */ }
