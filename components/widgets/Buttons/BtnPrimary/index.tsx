
function BtnPrimary({
  label,
  onClick = null,
  children = null,
  iconLeft = null,
  iconRight = null,
  className = ''
}) {
  function handleClick() {
    if (onClick) {
      onClick
    }
  }
  return (
    <button className={`btnPrimary ${className}`} onClick={handleClick} >
      {label}
    </button>

  )
}

export default BtnPrimary