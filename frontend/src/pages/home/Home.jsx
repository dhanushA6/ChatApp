import MessageContainer from "../../components/messages/MessageContainer"
import SideBar from "../../components/sidebar/SideBar"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-50 bg-clip backdrop-filter backdrop-blur-lg bg-opacity-0 p-3">
      <SideBar/>
      <MessageContainer/> 
      
    </div>
  )
}

export default Home
