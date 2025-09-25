import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-4">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center animate-radiate mb-6">
          Register
        </h2>
        <div className="animate-fade-in">
          {
            <form className="">
              {[
                {
                  label: "Full Name",
                  name: "fullName",
                  placeholder: "Enter your Fullname",
                },
                { label: "Email", name: "email", placeholder: "Email" },
                {
                  label: "Phone Number",
                  name: "phone",
                  placeholder: "Phone Number",
                },
                {
                  label: "Password",
                  name: "password",
                  placeholder: "Enter your Password",
                },
                {
                  label: "Confirm Password",
                  name: "confirmPassword",
                  placeholder: "Confirm your Password",
                },
              ].map(({ label, name, placeholder, type = "text" }) => {
                return (
                  <div key={name} className="mt-4">
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor={label}
                    >
                      {label}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type={type}
                      name={name}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder={placeholder}
                    />
                  </div>
                );
              })}

              <button
                type="submit"
                className="mt-6 w-full text-white py-2 rounded-lg animate-radiate-gradient bg-gradient-to-r from-indigo-600 to-purple-600 transition duration-200"

              >
                Register
              </button>
            </form>
          }
        </div>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
