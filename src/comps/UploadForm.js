import React, { useState } from 'react';

const UploadForm = () => {

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const types = ['image/png', 'image/jpg']

    const uploadHandler = (e) => {
        let selected = e.target.files[0];

        if (selected !== null && types.includes(selected.type))
            { setFile(selected)} 
        else
            { 
                setFile(null);
                setError('Please upload an image file')
            }
    }

    return (
        <form>
            <input type='file' onChange={uploadHandler}/>
        </form>
    )
}

export default UploadForm;