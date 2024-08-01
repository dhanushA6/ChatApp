const Converstion = () => {
  return (
    <>
    <div className="flex items-center gap-2 hover:bg-sky-500 cursor-pointer">

    <div className="avatar online">
        <div className="w-12 rounded-full">
          <img
            src="https://avatar.iran.liara.run/public/boy"
            alt="user avatar"
          />
        </div>
    </div>

    <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-gray-200"> Mickel Jackson</p>
          <span className="text-xl">😂</span>
        </div>
    </div>
    
    </div> 
    <div className="divider my-0 py-0 p-2"></div>
   </>
  );
};

export default Converstion;
