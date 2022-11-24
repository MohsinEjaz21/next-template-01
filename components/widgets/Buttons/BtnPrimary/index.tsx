
function BtnPrimary({
  label,
  onClick = null,
  children = null,
  iconLeft = null,
  iconRight = null
}) {
  function handleClick() {
    if (onClick) {
      onClick
    }
  }
  return (
    <button className="btnPrimary" onClick={handleClick} >
      <p>
        {label}
      </p>
    </button>

  )
}

export default BtnPrimary