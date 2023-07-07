import React, {useState} from 'react'

const Boxes = (props) => {
    // const [allBoxes, setBoxes] = useState(props.boxColors)
    // setBoxes(allBoxes => [...allBoxes, props.color])
    // const count = [];
    // count.push(props.color);
    // console.log(allBoxes)
    console.log(props.colors)

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