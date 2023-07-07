import React, {useState} from 'react'

const Boxes = (props) => {

    const {color, size, id} = props
    
    return (
        <>
            <div style={{backgroundColor: color, width:size+"px", height:size+"px"}}>Box {id}</div>
        </>
    )
}

export default Boxes