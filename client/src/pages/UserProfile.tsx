import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

interface UserProfile {
  email: string;
  id?: string;
  userName: string;  // Using userName as there is no 'name' field
}

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const fetchUserProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found, authentication required.");
      navigate("/signin");
      return;
    }

    try {
      const response = await axios.get<UserProfile>(
        "http://localhost:7500/user/getCurrentUser",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log(response.data); // To check the data structure in the console
      setUserProfile(response.data); // Set the entire user profile data as fetched
    } catch (error) {
      setError("Failed to fetch user profile. Please check your connection and try again.");
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  if (!userProfile) {
    return <div>{error || "Loading..."}</div>;
  }

  const [sidebarToggle, setSidebarToggle] = useState(true);
  return (
<>
    <Sidebar sidebarToggle={sidebarToggle} role="user"/>
    <Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
    <div style={{ maxWidth: "1300px", margin: "20px auto", padding: "20px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
      <h1 style={{ color: "#333" }}>User Profile</h1>
      <p><strong>Name:</strong> {userProfile.userName}</p> {/* Displaying userName as Name */}
      <p><strong>Email:</strong> {userProfile.email}</p>
      {userProfile.id && <p><strong>User ID:</strong> {userProfile.id}</p>}
    </div>
</>
  );
};

export default UserProfile;
