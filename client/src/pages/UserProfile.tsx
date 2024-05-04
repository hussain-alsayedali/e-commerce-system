// Assuming you have a UserProfile.js file
import React from 'react';

const UserProfile = () => {
    const isAuthenticated = localStorage.getItem('token') !== null;

    if (!isAuthenticated) {
        return <div>Please log in to view this page.</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            {/* Display user details here */}
        </div>
    );
};

export default UserProfile;
