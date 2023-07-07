import React, {useState} from 'react'

const AddColor = (props) => {

    const [color, setColor] = useState("")
    const submitForm = (e) => {
        e.preventDefault();
        props.newColor( color );
        setColor("")
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setColor(value)
    }

    return (
        <form onSubmit={ submitForm }>
            <label >Color:</label>
            <input type="text" onChange={ handleChange } name='color' value={color}/>
            <input type="submit" value="Add" />
        </form>
    )
}

export default AddColor