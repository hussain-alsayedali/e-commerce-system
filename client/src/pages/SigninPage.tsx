import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../api/axios.ts";
import Button from "../components/Button.tsx";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";

export default function SigninPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "customer", // Default role is set to "customer"
  });
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    let loginEndpoint = "/loginCustomer"; // Default login endpoint
    if (form.role === "admin") {
      loginEndpoint = "/loginAdmin"; // Change login endpoint for admin role
    }
    instance
      .post(loginEndpoint, {
        email: form.email,
        password: form.password,
      })
      .then((response) => {
        const token = response.data.token;
        console.log("Login successful:", response);
        localStorage.setItem("token", token);
        if (form.role === "admin") {
          navigate("/adminmainpage");
        } else {
          navigate("/userprofile");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Login failed: " + error.response.data.message);
      });
  };
  const [sidebarToggle, setSidebarToggle] = useState(true);
  return (
    <>
      <Sidebar sidebarToggle={sidebarToggle} role="user" />
      <Dashboard
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <div className="flex justify-center">
        <div className="mt-52 mr-16 ml-16 rounded w-2/3 lg:w-1/4 h-[500px] bg-semiwhite">
          <div className="flex flex-col justify-center items-center">
            <form
              className="flex flex-col justify-center items-center align-middle w-11/12 mt-20"
              onSubmit={handleLogin}
            >
              {/* Existing email field */}
              <div className="w-2/3 mt-4">
                <label className="font-semibold" htmlFor="email-input">
                  Email
                </label>
                <input
                  name="email"
                  id="email-input"
                  type="email"
                  className="rounded w-full border border-gray-300 p-2 h-9"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              {/* Existing password field */}
              <div className="w-2/3 mt-4">
                <label className="font-semibold" htmlFor="password-input">
                  Password
                </label>
                <input
                  name="password"
                  id="password-input"
                  type="password"
                  className="rounded w-full border border-gray-300 p-2 h-9"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
              {/* New radio input for role selection */}
              <div className="w-2/3 mt-4 flex flex-row gap-2">
                <div>
                  <label>
                    <input
                      type="radio"
                      name="role"
                      value="customer"
                      checked={form.role === "customer"}
                      onChange={handleChange}
                    />
                    Customer
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="role"
                      value="admin"
                      checked={form.role === "admin"}
                      onChange={handleChange}
                    />
                    Admin
                  </label>
                </div>
              </div>
              {/* Existing submit button */}
              <div className="mt-16 w-2/3">
                <Button title="Sign in" type="submit" />
              </div>
            </form>
            <h2 className="mt-4 text-gray-400">
              Don't have an account?{" "}
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
    </>
  );
}
