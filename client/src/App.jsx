import NavBar from "./components/NavBar";
import UploadResume from "./components/UploadResume";
import DataView from "./components/DataView";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="bg-slate-300">
      <NavBar />
      <UploadResume />
      <DataView />
    </div>
  );
}

export default App;
