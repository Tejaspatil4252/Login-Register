import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Register
        </h2>
        <form>
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
            return(
            <div key={name} className="mt-4">
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
            )
          })}

          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
