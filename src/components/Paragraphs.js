import { useSelector } from 'react-redux';

function Paragraphs() {
    const paragraps = useSelector(state => state.texts.items)
    const isLoad = useSelector(state => state.texts.isLoad)
    return (
        <div className='mt-4 container py-5 px-5 w-75 paragraphside'>
            {isLoad && <div className="spinner-border text-light position-absolute start-50 top-50 z-index-100" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}

            {paragraps}


        </div>
    )
}

export default Paragraphs