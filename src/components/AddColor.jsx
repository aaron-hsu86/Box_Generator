import React, {useState} from 'react'

const AddColor = (props) => {

    const [formData, setColorData] = useState({
        color: "",
        size: ""
    })
    const submitForm = (e) => {
        e.preventDefault();
        props.newColor( formData);
        setColorData({
            color: "",
            size: ""
        })
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setColorData((currentData) => ({...currentData, [name]:value}))
        console.log(typeof(value))
    }

    return (
        <form onSubmit={ submitForm }>
            <label >Color:</label>
            <input type="text" onChange={ handleChange } name='color' value={formData.color}/>
            {/* <input type="text" onChange={ (e) => setColor(e.target.value) } name='color' value={formData.color}/> */}
            <br/>
            <label>Size:</label>
            <input type="text" onChange={ handleChange } name='size' value={formData.size}/>
            {/* <input type="text" onChange={ (e) => setColor(e.target.value) } name='size' value={formData.size}/> */}
            <br/>
            <input type="submit" value="Add" />
        </form>
    )
}

export default AddColor