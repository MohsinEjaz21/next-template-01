import { HomeDataSource } from "../HomeDataSource";

const data = HomeDataSource.section03.data;

function Section_03() {


  return (
    <section className="section_03" data-scroll-section custom-theme="dark">
      <>
        {data.map(e => (
          <div className="frame_01" key={e.key} >
            <div className="text-group" >
              {e?.icon}
              <h3 className="text01">{e.text01}</h3>
            </div>
            <p className="text02">{e.text02}</p>
          </div>
        ))}
      </>
    </section>
  )
}

export default Section_03