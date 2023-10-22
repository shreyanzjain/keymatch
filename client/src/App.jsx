import UserView from "./components/UserView";
import FormView from "./components/FormView";
import UploadResume from "./components/UploadResume";
import "tailwindcss/tailwind.css";
import { Route, Routes } from "react-router-dom";
import JobsView from "./components/JobsView";

function App() {
  return (
    <div className="bg-slate-300">
      <Routes>
        <Route path="/" element={<UserView/>}>
          <Route index element={<UploadResume/>}/>
          <Route path="resume" element={<UploadResume/>}/>
          <Route path="jobs">
            <Route index element={<JobsView/>}/>
            <Route path="create" element={<FormView/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
