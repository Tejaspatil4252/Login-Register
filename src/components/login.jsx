import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-4">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center animate-radiate mb-6">
          Welcome Back
        </h2>
        <div className="animate-fade-in">
          {
            <form className="">
              {[
                {
                  label: "Email",
                  name: "email",
                  type: "email",
                  placeholder: "you@example.com",
                },
                {
                  label: "Password",
                  name: "password",
                  type: "password",
                  placeholder: "•••••••••",
                },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name} className="mt-4">
                  <label
                    htmlFor={label}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              ))}

              <button
                type="submit"
                className="mt-6 w-full text-white py-2 rounded-lg animate-radiate-gradient bg-gradient-to-r from-indigo-600 to-purple-600 transition duration-200"


              >
                Login
              </button>
            </form>
          }
        </div>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
