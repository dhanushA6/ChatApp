import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div>
      <form className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <button
          type="submit"
          className="btn btn-circle font-weight-normal text-white bg-sky-500"
        >
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </form>
      <div className="divider py-0 m-0 p-2"></div>
    </div>
  );
};

export default SearchInput;
