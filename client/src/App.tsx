import Header from "./components/Header"
import SideBar from './components/SideBar'


import { Outlet } from 'react-router-dom'


function App() {

  return (
    <div className="grid grid-cols-5 gap-4 bg-slate-200">
        <Header />
        <SideBar />
        <Outlet />
    </div>
  )
}

export default App
