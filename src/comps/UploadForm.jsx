import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ["image/png", "image/jpeg", "image/jpg"];

    const fileUpload = (e) => {
        const selectedFile = e.target.files[0];
        console.log(selectedFile);
        if(selectedFile && types.includes(selectedFile.type))
        {
            setFile(selectedFile);
            setError(null);
        }
        else
        {
            setFile(null);
            setError('Please select a file of following formats: "image/png", "image/jpeg", "image/jpg", "image/jpg", "application/vnd.ms-excel", "application/pdf", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "text/plain", "application/vnd.oasis.opendocument.text", "application/msword", "application/vnd.ms-powerpoint"');
        }
    }

    return ( 
        <form>
            <label>
                <input type="file" onChange={fileUpload} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
     );
}
 
export default UploadForm;