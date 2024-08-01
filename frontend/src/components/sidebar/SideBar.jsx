import SearchInput from "../SearchInput"
import Converstion from "../Converstion" 
import LogoutButton from "../LogoutButton"

const SideBar =  ()=>{
  return (
    <div className="border-r font-bold border-slate-500 flex flex-col">
       <SearchInput/>
       <Converstion/>
       <Converstion/>
       <Converstion/>
       <Converstion/>
       <Converstion/>
       <Converstion/>
       <LogoutButton/> 
    </div>
  )
}

export default SideBar
