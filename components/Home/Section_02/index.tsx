import { useEffect, useState } from "react";
import ReactDOMServer from 'react-dom/server';
import ElipseText from "../../widgets/ElipseText";
import { HomeDataSource } from "../HomeDataSource";

const data = HomeDataSource.section02;

function Section_02() {

  const [text, setText] = useState('');

  useEffect(() => {
    const plainText = ReactDOMServer.renderToString(data.text03)
    setText(plainText);
    console.log(plainText)
  }, [])

  return (
    <section className="section_02" data-scroll-section  >
      <div className="frame_01" >
        <img src={data.image} alt="" />
      </div>
      <div className="frame_02" >
        <h4>{data.text01}</h4>
        <h2>{data.text02}</h2>
        <ElipseText text={text} size={554} />
      </div>
    </section>
  )
}

export default Section_02