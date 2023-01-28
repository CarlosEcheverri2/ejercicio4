import React from 'react'

const Square = ({color,changeColor,stopLoop}) => {

  return (
    <div 
    onMouseEnter={ () => { changeColor() } } 
    onMouseOut={ () => { stopLoop() } }
    onDoubleClick={ () => { stopLoop() } } 
    style={{
        width:'255px',
        height:'255px',
        cursor:'pointer',
        backgroundColor:`rgb(${color.red},${color.green},${color.blue})`,
        transition:'0.5s all'
    }}/>
  )
}

export default Square