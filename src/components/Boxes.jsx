import React, {useState} from 'react'

const Boxes = (props) => {

    const boxStyle = {
        padding: "20px",
        gap:"20px",
        display: "flex",
        flexWrap: "wrap"
    }

    return (
        <>
        <div style={boxStyle}>
            {props.colors.map(color => (
                <div style={{background: color, width:"100px", height:"100px"}}></div>
            ))}
        </div>
        </>
    )
}

export default Boxes