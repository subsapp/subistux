import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
const Layout = () => {
  return (
    <div className="grid grid-rows-[auto,1fr] h-screen overflow-hidden">
      <div className="bg-black">
      <Navbar/>
      </div>
      <div className="w-screen flex-1 h-screen">
      {<Outlet/>}
      </div>
    </div>
  )
}

export default Layout
