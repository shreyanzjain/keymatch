import axios from "axios";
import { useEffect, useState } from "react";

function DataView() {
  const [data, setData] = useState(null);

  async function getData() {
    const resp = await axios.get("http://127.0.0.1:8000/api/read/jobs");
    return resp.data;
  }

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <div className="h-screen w-full">
      <div className="flex h-full w-full pb-2 items-center justify-center">
        <div className="container h-full w-full mx-2 bg-white">
          <div className="container-lg h-12 bg-black">
            <div className="flex w-full h-full items-center">
              <div className="container h-full w-1/12 bg-slate-100"></div>
              <div className="container h-full w-3/12 bg-slate-200"></div>
              <div className="container h-full w-2/12 bg-slate-100"></div>
              <div className="container h-full w-6/12 bg-slate-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataView;
