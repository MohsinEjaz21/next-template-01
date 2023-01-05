import { HomeDataSource } from "../HomeDataSource";

const data = HomeDataSource.section06.data;

function Section_06() {
  return (
    <section className="section_06" >
      <h3 className="heading">Latest Events</h3>
      <p className="tagline">CASS organises various types of events for its members and the public. Browse through the forthcoming events below or click on the button to view all our events.</p>
      <div className="container" >
        {data.map((e, i) => (
          <div className="publication_item" key={i}>
            <img src={e.imgUrl} />
            <div className="content">
              <p>{e.text01}</p>
              <h5>{e.text02}</h5>
              <p>{e.text03}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section_06