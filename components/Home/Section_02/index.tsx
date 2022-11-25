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
    <section className="section_02">
      <div className="frame_01">
        <img src={data.image} alt="" />
      </div>
      <div className="frame_02">
        <h3>{data.text01}</h3>
        <h2>{data.text02}</h2>
        <div>
          <ElipseText text={text} size={554} />
        </div>
      </div>
    </section>
  )
}

export default Section_02