import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <form>
          {[
            {
              label: "Email",
              name: "email",
              type: "email",
              placeholder: "Email",
            },
            {
              label: "Password",
              name: "password",
              type: "password",
              placeholder: "Password",
            },
          ].map(({ label, name, type, placeholder }) => {
            return (
              <div key={name} className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  {label} 
                 <span className="text-red-500">*</span>
                </label>
                <input
                  type={type}
                  name={name}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={placeholder}
                />
              </div>
            );
          })}
    
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
