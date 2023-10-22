/* eslint-disable react/prop-types */
function JobRow({ title, company, keywords }) {
  return (
    <div className="container h-24">
      <div className="flex w-full h-full items-center justify-between border-b-4 border-b-gray-700">
        <div className="container w-1/4 h-full border-e-2 border-e-gray-300">
          <div className="flex flex-col-reverse h-full ms-2">
            <p className="text-xl font-bold truncate">{title}</p>

            <p className="text-sm text-gray-600 font-semibold">{company}</p>
          </div>
        </div>
        <div className="container w-3/4 h-full overflow-y-auto">
          <div className="flex h-auto w-full p-2 flex-wrap gap-2">
            {keywords.map((keyword, index) => {
              return (
                <a
                  key={index}
                  className="border-2 rounded-xl border-gray-700 text-gray-700 font-semibold px-2 py-0.5"
                >
                  {keyword}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobRow;
