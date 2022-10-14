import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { fetchTexts } from "../redux/textSlicer"
function Inputs() {
    const [paragNumber, setParagNumber] = useState(4);
    const [texttype, setTextType] = useState("text");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTexts({ paragNumber, texttype }))
    }, [dispatch, paragNumber, texttype])

    function handleNumb(e) {
        setParagNumber(+e.target.value)
    }
    function handleType(e) {
        setTextType(e.target.value)
    }

    return (
        <div className='mt-4 container py-1 w-75' >
            <label htmlFor='paragraphnumber' className='text-light fs-5 me-2'>Paragraph number: </label>
            <input id='paragraphnumber' type="number" className='me-2' onChange={(e) => handleNumb(e)} />
            <label htmlFor="types" className='text-light fs-5 me-2'>include HTML:</label>
            <select id="types" name="types" defaultValue="text" onChange={(e) => handleType(e)}>
                <option value="html">Yes</option>
                <option value="text"  >no</option>
            </select>
        </div >
    )
}

export default Inputs