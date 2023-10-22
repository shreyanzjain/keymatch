import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="w-full h-24 bg-teal-900">
    <div className="flex w-full h-full items-center justify-between">
      <div className="ms-4 text-white">
        <NavLink to="" className="text-2xl font-bold">Keymatch</NavLink>
      </div>
      <div className="container w-1/4"></div>
      <div className="me-4 text-black">
        {/* <NavLink to="/" className="bg-white shadow-md rounded-sm px-2 py-1 me-2">Upload Resume</NavLink> */}
        <NavLink to="/jobs/create" className="bg-blue-500 rounded-md px-4 py-1 me-2"></NavLink>
        <NavLink to="/jobs" className="bg-yellow-500 rounded-md px-4 py-1 me-2"></NavLink>
        <NavLink to="/resume" className="bg-red-500 rounded-md px-4 py-1"></NavLink>
      </div>
    </div>
  </div>;
}

export default NavBar;
