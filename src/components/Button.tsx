import React from 'react'

type btnStyleProps = {
  buttonStyle :React.CSSProperties
}

const Button = (props:btnStyleProps) => {
  return (
    <button style={props.buttonStyle}>Click Me</button>
  )
}

export default Button