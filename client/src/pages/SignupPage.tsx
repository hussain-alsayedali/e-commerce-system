import React, { useState } from "react";
import Button from "../components/Button.tsx";
import instance from "../api/axios.ts";

export default function SignupPage() {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    instance
      .post("/registerCustomer", {
        userName: form.userName,
        email: form.email,
        password: form.password,
        confirmPassword: form.confirmPassword,
      })
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="flex justify-center">
      <div className="mt-52 mr-16 ml-16 rounded w-2/3 lg:w-1/4 h-[600px] bg-semiwhite ">
        <div className="flex flex-col justify-center items-center">
          <form
            action=""
            className="flex flex-col justify-center items-center align-middle w-11/12 mt-20"
            onSubmit={handleRegister}
          >
            <div className="w-2/3 mt-4">
              <label className="font-semibold" htmlFor="name-input">
                Name
              </label>
              <input
                name="userName"
                id="userName-input"
                type="text"
                className="rounded w-full border border-gray-300 block mt-2 p-2 h-9"
                value={form.userName}
                onChange={handleChange}
              />
            </div>
            <div className="w-2/3 mt-4">
              <label className="font-semibold" htmlFor="email-input">
                Email
              </label>
              <input
                name="email"
                id="email-input"
                type="text"
                className="rounded w-full border border-gray-300 block mt-2 p-2 h-9 "
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-2/3 mt-4">
              <label className="font-semibold" htmlFor="password-input">
                Password
              </label>
              <input
                name="password"
                id="password-input"
                type="text"
                className="rounded w-full border border-gray-300 block mt-2 p-2 h-9 "
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div className="w-2/3 mt-4">
              <label className="font-semibold" htmlFor="confirm">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                id="confirm-input"
                type="text"
                className="rounded w-full border border-gray-300 block mt-2 p-2 h-9"
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <button className="bg-purple-800 text-white rounded-lg py-2 px-2 hover:opacity-50  mt-16 w-2/3 ">
              sign up
            </button>
          </form>
          <h2 className="mt-4 text-gray-400">
            Have an account ?{" "}
            <a
              href="/signin"
              className="text-darkpurple font-bold hover:opacity-50"
            >
              Sign in
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}
