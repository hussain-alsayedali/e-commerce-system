import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Define the shape of the user profile
interface UserProfile {
  name: string;
  email: string;
  id?: string;
  username?: string;
}

const UserProfile = () => {
  // State variables to store user profile and error message
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string>("");
  
  // React Router hook to enable navigation
  const navigate = useNavigate();

  // Function to fetch the user profile from the server
  const fetchUserProfile = async () => {
    // Get the token from local storage
    const token = localStorage.getItem("token");
    console.log("Token: ", token); // Log the token to check its presence

    // If no token is found, redirect to sign in and return
    if (!token) {
      setError("No token found, authentication required.");
      navigate("/signin"); // Redirect to sign in if no token found
      return;
    }

    try {
      // Make a GET request to fetch the user profile
      const response = await axios.get<UserProfile>(
        "http://localhost:7500/user/getCurrentUser", // API endpoint
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request header
          },
        }
      );

      // Set the fetched user profile in state
      setUserProfile(response.data);
    } catch (error) {
      // Handle any errors that occur during the API request
      setError(
        "Failed to fetch user profile. Please check your connection and try again."
      );
      console.error("Error fetching user profile:", error);
    }
  };

  // Use the useEffect hook to fetch the user profile when the component mounts
  useEffect(() => {
    fetchUserProfile();
  }, []);

  // Render the user profile or error message
  if (!userProfile) {
    return <div>{error || "Loading..."}</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          {userProfile.username && <p>Username: {userProfile.username}</p>}
          {userProfile.id && <p>User ID: {userProfile.id}</p>}
        </>
      )}
    </div>
  );
};

export default UserProfile;