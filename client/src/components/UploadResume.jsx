import { useState } from "react";
import axios from "axios";

function UploadResume() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    axios.put("http://127.0.0.1:8000/api/upload/resume", formData)
    .then(resp => console.log(resp.data))
    .catch(err => console.log(err));
  }

  return (
    <div className="w-full h-16 px-2 mt-2 mb-2">
        <div className="container-lg h-16 w-full bg-white rounded-md shadow-md">
          <div className="flex w-full h-full items-center justify-between">
            <p className="ms-4 text-gray-700 lg:text-lg md:text-sm italic">
              Upload your resume to get started. If uploaded, you can update from here.
            </p>
            
            <form className="flex items-center">
                <p className="text-gray-700 me-2 italic underline">{file ? file.name :'No file chosen.'}</p>
                <label htmlFor="file-input" className="me-2 rounded-2xl px-4 py-1 bg-sky-950 border-2 border-sky-950 text-white hover:bg-white hover:text-sky-950 cursor-pointer">Select a file</label>
                <input type="file" id="file-input" style={{display: "none"}} onChange={e => handleFileChange(e)} />
                <button className="me-4 rounded-2xl px-4 py-1 bg-sky-950 border-2 border-sky-950 text-white hover:bg-white hover:text-sky-950 " type="submit" onClick={e => handleSubmit(e)}>Upload</button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default UploadResume;
