import React, { useState } from "react";
import instance from "../api/axios.ts";

export default function SignupPage() {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(""); // State to handle error messages

  // Handles input changes for all fields
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handles form submission
  const handleRegister = (e: { preventDefault: () => void; }) => {
    e.preventDefault();  // Prevent default form submission behavior
    console.log("Form data being sent:", form);

    // Check if passwords match before sending to server
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      console.log("Passwords do not match");
      return;
    }

    // Reset the error message
    setError("");

    // Send registration data to the server
    instance.post("/registerCustomer", {
      userName: form.userName,
      email: form.email,
      password: form.password,
      confirmPassword: form.confirmPassword,
    })
    .then((response) => {
      const token = response.data.token;
      localStorage.setItem("token", token);  // Save the received token to local storage
      console.log("Registration successful, token received:", token);
      window.location.href = '/userprofile';  // Redirect to the profile page
    })
    .catch((error) => {
      console.error("Registration error:", error);
      setError(`Failed to register: ${error.response?.data?.message || "Unknown Error"}`);
    });
  };

  return (
    <div className="flex justify-center">
      <div className="mt-52 mr-16 ml-16 rounded w-2/3 lg:w-1/4 h-[600px] bg-semiwhite">
        <div className="flex flex-col justify-center items-center">
          <form className="flex flex-col justify-center items-center w-11/12 mt-20" onSubmit={handleRegister}>
            {/* Form inputs for user registration */}
            <div className="w-2/3 mt-4">
              <label className="font-semibold" htmlFor="userName-input">Name</label>
              <input
                type="text"
                name="userName"
                id="userName-input"
                className="rounded w-full border border-gray-300 p-2 h-9"
                value={form.userName}
                onChange={handleChange}
              />
            </div>
            <div className="w-2/3 mt-4">
              <label className="font-semibold" htmlFor="email-input">Email</label>
              <input
                type="email"
                name="email"
                id="email-input"
                className="rounded w-full border border-gray-300 p-2 h-9"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-2/3 mt-4">
              <label className="font-semibold" htmlFor="password-input">Password</label>
              <input
                type="password"
                name="password"
                id="password-input"
                className="rounded w-full border border-gray-300 p-2 h-9"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div className="w-2/3 mt-4">
              <label className="font-semibold" htmlFor="confirm-input">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirm-input"
                className="rounded w-full border border-gray-300 p-2 h-9"
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}  
            <button type="submit" className="bg-purple-800 text-white rounded-lg py-2 px-2 hover:opacity-50 mt-16 w-2/3">
              Sign Up
            </button>
          </form>
          <div className="mt-4 text-gray-400">
            Have an account? <a href="/signin" className="text-darkpurple font-bold hover:opacity-50">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
}
