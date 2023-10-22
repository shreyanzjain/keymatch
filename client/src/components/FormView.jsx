import { useState } from "react";
import axios from "axios";

function FormView() {
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://127.0.0.1:8000/api/create/job", {
      company: company,
      title: title,
      description: description
    })
    .then(() => {
      setCompany("");
      setDescription("");
      setTitle("");
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
  return (
    <div className="h-5/6 w-full mt-2">
      <div className="flex h-full w-full items-center justify-center">
        <div className="container h-full md:w-full lg:w-1/2 mx-2 bg-white rounded-md shadow-md">
          <form className="flex-col h-full w-full items-start justify-start">
            {/* Comapany */}
            <div className="container w-full h-12">
              <div className="flex w-full h-full items-center justify-start">
                <label htmlFor="form-company" className="ms-4 font-bold text-2xl uppercase text-gray-500">Company Name</label>
              </div>
            </div>
            <div className="container w-full h-12">
              <div className="flex w-full h-full items-start justify-start">
                <input type="text"
                value={company}
                onChange={e => setCompany(e.target.value)} id="form-company" className="ms-4 flex w-full me-4 border-2 border-gray-500 rounded-md py-2 px-2"/>
              </div>
            </div>
            {/* Job Title */}
            <div className="container w-full h-12">
              <div className="flex w-full h-full items-center justify-start">
                <label htmlFor="form-job-title" className="ms-4 font-bold text-2xl uppercase text-gray-500">Job Title</label>
              </div>
            </div>
            <div className="container w-full h-12">
              <div className="flex w-full h-full items-start justify-start">
                <input type="text" value={title}
                onChange={e => setTitle(e.target.value)} id="form-job-title" className="ms-4 flex w-full me-4 border-2 border-gray-500 rounded-md py-2 px-2 focus:border-blue-500 focus:border-2"/>
              </div>
            </div>
            {/* Job Description */}
            <div className="container w-full h-12">
              <div className="flex w-full h-full items-center justify-start">
                <label htmlFor="form-job-description" className="ms-4 font-bold text-2xl uppercase text-gray-500">Job Description</label>
              </div>
            </div>
            <div className="container w-full h-1/2">
              <div className="flex w-full h-full items-start justify-start">
                <textarea type="text" value={description}
                onChange={e => setDescription(e.target.value)} id="form-job-description" className="ms-4 block w-full h-full me-4 border-2 border-gray-500 rounded-md py-2 px-2 resize-none"
                placeholder="Paste the job description here..."></textarea>
              </div>
            </div>
            {/* Submit Button */}
            <div className="container w-full h-16 mt-1">
              <div className="flex w-full h-full items-center justify-end">
                <button type="submit" onClick={async e => await handleSubmit(e)} htmlFor="form-job-description" className="me-4 font-bold text-lg text-white shadow-sm rounded-md bg-blue-600 py-1 px-2 hover:shadow-lg hover:shadow-blue-500">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormView;
