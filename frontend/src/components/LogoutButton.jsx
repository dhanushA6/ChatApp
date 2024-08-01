import { BiLogOut } from "react-icons/bi";
const LogoutButton = () => {
  return (
    <div className="mt-auto">
      <button className="w-6 h-6 font-bold text-white-500">
        {" "}
        <BiLogOut className="w-6 h-6 font-bold text-white-800" />
      </button>
    </div>
  );
};

export default LogoutButton;
