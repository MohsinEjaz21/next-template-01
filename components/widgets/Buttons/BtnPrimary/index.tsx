
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
      {label}
    </button>

  )
}

export default BtnPrimary