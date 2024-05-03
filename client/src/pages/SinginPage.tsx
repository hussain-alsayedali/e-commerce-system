import Button from "../components/Button.tsx";
import { useState } from "react";
import instance from "../api/axios.ts";
export default function SigninPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    instance
      .post("/loginCustomer", {
        email: form.email,
        password: form.password,
      })
      .then((response) => {
        const token = response.data.token;
        console.log(response);
        localStorage.setItem("token", token);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="flex justify-center">
      <div className="mt-52 mr-16 ml-16 rounded w-2/3 lg:w-1/4 h-[500px] bg-semiwhite ">
        <div className="flex flex-col justify-center items-center">
          <form
            action=""
            className="flex flex-col justify-center items-center align-middle w-11/12 mt-20"
            onSubmit={handleLogin}
          >
            <div className="w-2/3 mt-4">
              <label className="font-semibold" htmlFor="email-input">
                Email
              </label>
              <input
                name="email"
                id="email-input"
                type="text"
                className="rounded w-full border border-gray-300 block mt-2 p-2 h-9"
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
                className="rounded w-full border border-gray-300 block mt-2 py-2 h-9"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div className=" mt-16 w-2/3">
              <Button title="Sign in" />
            </div>
          </form>
          <h2 className="mt-4 text-gray-400">
            Don't have an account ?{" "}
            <a
              href="/signup"
              className="text-darkpurple font-bold hover:opacity-50"
            >
              Sign up
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}
