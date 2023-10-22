import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function UserView() {
  return (
    <div className="h-screen w-full">
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default UserView