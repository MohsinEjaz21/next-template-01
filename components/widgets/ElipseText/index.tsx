import { useState } from "react";

function ElipseText({ text, size = 500 }) {
  const [showMore, setShowMore] = useState(true)
  const renderText = (text) => {
    let textJSX = text;
    if (showMore) {
      textJSX = text.substring(0, size);
    }
    return (<span className="elipse-text">
      <p className="text01" dangerouslySetInnerHTML={{ __html: textJSX }} />
      &nbsp;&nbsp;
      <a className="btn01" onClick={() => setShowMore(!showMore)}>
        {!showMore && <svg width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M497.333 239.999H80.092l95.995-95.995l-22.627-22.627L18.837 256L153.46 390.623l22.627-22.627l-95.997-95.997h417.243v-32z"></path></svg>}
        {showMore ? "Show More" : "Show Less"}
        {showMore && <svg width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M9.854 3.146L14.207 7.5l-4.353 4.354l-.708-.708L12.293 8H1V7h11.293L9.146 3.854l.708-.708Z" clipRule="evenodd"></path></svg>}
      </a>
    </span>)
  }

  return (
    <>
      {renderText(text)}
    </>
  )
}

export default ElipseText