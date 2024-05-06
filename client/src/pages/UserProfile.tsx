import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface UserProfile {
    name: string;
    email: string;
    id?: string;
    username?: string;
}

const UserProfile = () => {
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [error, setError] = useState('');

    const fetchUserProfile = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('No token found, authentication required.');
            return;
        }

        try {
            const response = await axios.get<UserProfile>('http://localhost:7500/api/user/profile', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUserProfile(response.data);
        } catch (err) {
            setError('Failed to fetch profile. Please try again.');
            console.error(err);
        }
    };

    useEffect(() => {
        fetchUserProfile();
    }, []); // Dependency array is empty, so this runs once on mount

    if (!localStorage.getItem('token')) {
        return <div>Please log in to view this page.</div>;
    }

    if (!userProfile) {
        return <div>{error || "Loading..."}</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {userProfile.name}</p>
            <p>Email: {userProfile.email}</p>
            {/* Add more fields as needed */}
        </div>
    );
};

export default UserProfile;
