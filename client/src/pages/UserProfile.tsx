import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

interface UserProfile {
  email: string;
  id?: string;
  userName: string;
}

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true; // Flag to check if component is mounted

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
        if (isMounted) {
          setUserProfile(response.data);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError("Failed to fetch user profile: " + error.message);
        } else {
          setError("An unexpected error occurred");
        }
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();

    return () => {
      isMounted = false; // Cleanup function to toggle the mounted flag
    };
  }, [navigate]); // Note: Adding `navigate` to dependencies is technically correct but redundant since it should be stable

  if (!userProfile) {
    return <div>{error || "Loading..."}</div>;
  }

  return (
    <>
      <Sidebar sidebarToggle={true} role="user" />
      <Dashboard sidebarToggle={true} setSidebarToggle={() => {}} />
      <div style={{ maxWidth: "1300px", margin: "20px auto", padding: "20px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
        <h1 style={{ color: "#333" }}>User Profile</h1>
        <p><strong>Name:</strong> {userProfile.userName}</p>
        <p><strong>Email:</strong> {userProfile.email}</p>
        {userProfile.id && <p><strong>User ID:</strong> {userProfile.id}</p>}
      </div>
    </>
  );
};

export default UserProfile;
