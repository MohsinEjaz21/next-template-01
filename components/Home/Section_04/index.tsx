import { HomeDataSource } from "../HomeDataSource";

const data = HomeDataSource.section03.data;

function Section_04() {


  return (
    <section className="section_04" data-scroll-section  >
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

export default Section_04