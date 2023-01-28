import React, { useState } from 'react'
import Square from '../pure/Square'

const style = {
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'400px'
    }
}

const ObjectContainer = () => {

  const initColor = { red:'0',green:'0',blue:'0' }
  const [loop,setLoop] = useState(0);  
  const [color,setColor] = useState ( initColor )

  const colorRandom = () => {
    return Math.random() * (256 - 0) + 0;
  }

  const setRgb = () => {
    let copyColor = color
    copyColor.red = colorRandom()
    copyColor.green = colorRandom()
    copyColor.blue = colorRandom()

    return copyColor
  }

  const changeColor = () => {
    setLoop(setInterval(function(){
      setColor({...setRgb()})
    }, 500)
    )

  }

  const stopLoop=()=>{
    return clearInterval(loop);
  } 

  return (
    <div style={style.container}>
        <Square
            color={ color }
            changeColor={ changeColor }
            stopLoop={ stopLoop }
        />
    </div>
  )
}

export default ObjectContainer