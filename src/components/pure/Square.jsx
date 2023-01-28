import React from 'react'

const Square = ({color,changeColor,returInitColor}) => {

  return (
    <div 
    onMouseEnter={ () => { changeColor() } } 
    onMouseOut={ () => { returInitColor() } }
    onDoubleClick={ () => { returInitColor() } } 
    style={{
        width:'255px',
        height:'255px',
        cursor:'pointer',
        backgroundColor:`rgb(${color.red},${color.green},${color.blue})`
    }}/>
  )
}

export default Square