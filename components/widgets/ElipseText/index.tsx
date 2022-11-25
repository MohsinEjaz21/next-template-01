import { useState } from "react"

function ElipseText({ text, size = 500 }) {

  const [showMore, setShowMore] = useState(false)

  const renderText = (text) => {
    if (showMore) {
      return (<p dangerouslySetInnerHTML={{ __html: text }} />)
    }
    return (<p dangerouslySetInnerHTML={{ __html: `${text.substring(0, size)}` }} />)
  }


  return (
    <div className="elipse-text">
      {renderText(text)}
      <a onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </a>
    </div>
  )
}

export default ElipseText