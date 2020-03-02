import React from 'react'



function Name(props) {
  let nameVariable =  props.currentName;
  return (
  <span>
    {nameVariable}
  </span>
  )
}



export default Name;