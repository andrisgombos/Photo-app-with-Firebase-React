import React, { useState } from 'react';

const UploadForm = () => {

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const types = ['image/png', 'image/jpeg']

    const uploadHandler = (e) => {
        let selected = e.target.files[0];
        setFile(selected);

        if (selected !== null && types.includes(selected.type))
            { setFile(selected)
              setError('')
            }
        else
            { 
                setFile(null);
                setError('Please upload an image file')
            }
    }

    return (
        <form>
            <input type='file' onChange={uploadHandler}/>
            <div className='output'>
                {error && <div className='error'> {error} </div>}
                {file && <div> {file.name} </div>}
            </div>
        </form>
    )
}

export default UploadForm;