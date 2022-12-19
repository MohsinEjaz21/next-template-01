import { HomeDataSource } from "../HomeDataSource";

const data = HomeDataSource.section05.data;

function Section_05() {
  return (
    <section className="section_05" >
      <h3 className="heading">Latest Publications</h3>
      <p className="tagline">CASS produces research reports and other publications on current and upcoming policy challenges. Browse through the latest publications on the right or click to view all our publications.</p>
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

export default Section_05