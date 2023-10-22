import axios from "axios";
import { useEffect, useState } from "react";
import JobRow from "./JobRow";

function JobsView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .get("http://127.0.0.1:8000/api/read/jobs")
        .then((resp) => {
          console.log(resp.data);
          setData(resp.data);
        })
        .catch((err) => console.log(err));
    }

    getData();
  }, []);

  const jobList = data.map(({ title, company, keywords, id }) => {
    return (
      <JobRow key={id} title={title} company={company} keywords={keywords} />
    );
  });

  return (
    <div className="h-5/6 w-full mt-2">
      <div className="flex h-full w-full items-center justify-center">
        <div className="container h-full md:w-full lg:w-1/2 mx-2 bg-white rounded-md shadow-md overflow-y-auto">
          <div className="flex flex-col-reverse">
					{jobList}
					</div>
        </div>
      </div>
    </div>
  );
}

export default JobsView;
