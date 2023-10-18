function UploadResume() {
  return (
    <div className="w-full h-20 px-2">
      <div className="flex h-full w-full items-center justify-center">
        <div className="container h-16 w-full bg-white rounded-t-md">
          <div className="flex w-full h-full items-center justify-between">
            <p className="ms-4 text-gray-700 text-lg italic">
              Upload your resume to get started.
            </p>
            <div className="flex items-center">
                <p className="text-gray-700 me-2 italic underline">No file chosen.</p>
                <button className="me-4 rounded-2xl px-4 py-1 bg-sky-950 border-2 border-sky-950 text-white hover:bg-white hover:text-sky-950 " type="submit">Upload</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadResume;
