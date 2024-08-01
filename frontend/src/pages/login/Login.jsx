


const Login = () => {

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login
					<span className='text-blue-500'> ChatApp</span>
				</h1>

	             <form action="">
                     <div>
                         <label className="label">
                             Username
                         </label> 
                         <input type="text"
                          placeholder="Enter username"
                          className="input w-full input-bordered h-10"
                          />
                     </div>

                     <div>
                         <label className="label">
                             Password
                         </label> 
                         <input type="text"
                          placeholder="Enter Password"
                          className="input w-full input-bordered h-10"
                          />
                     </div >
                     <a href="#" className="m-2">Do'nt have an account ? <span className="text-blue-100 text-sm font-semibold
                     hover:underline hover:text-blue-500 "> signup</span></a> 
                     <button className="btn btn-block btn-sm mt-2">Login</button>
                 </form>
			</div>
		</div>
	);
};
export default Login;