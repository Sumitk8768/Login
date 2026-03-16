import "tailwindcss";

function Login({ setToggle }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-[420px]">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Welcome back
      </h2>
      <p className="text-center text-gray-500 mt-1 mb-6">
        Sign in to your account
      </p>

      <div className="flex flex-col gap-4">
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            placeholder="sumit@example.com"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
          />
        </div>

        <button className="mt-4 bg-[#0F172B] text-white py-3 rounded-lg hover:bg-[#1a2440] transition">
          Sign in
        </button>

        <p className="text-center text-gray-500 mt-4">
          Don't have an account?
          <span
            className="text-[#0F172B] cursor-pointer ml-1"
            onClick={() => setToggle(false)}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;