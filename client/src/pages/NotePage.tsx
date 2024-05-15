import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import instance from '../api/axios.ts';

export default function NotePage() {
  interface Note {
    name: string;
    email: string;
    message: string;
  }

  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetchNotes();
  });

  const fetchNotes = () => {
    instance
      .get('/note')
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching notes:', error);
      });
  };

  const [sidebarToggle, setSidebarToggle] = useState(true);
  
  return (
    <>
      <Sidebar sidebarToggle={sidebarToggle} role="user" />
      <Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-4">Notes</h1>
          {notes.length > 0 ? (
            <ul className="space-y-4">
              {notes.map((note: Note, index) => (
                <li key={index} className="bg-white p-4 rounded shadow">
                  <p className="font-semibold">Name: {note.name}</p>
                  <p className="text-gray-600">Email: {note.email}</p>
                  <p className="mt-2">Message: {note.message}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No notes found</p>
          )}
        </div>
    </>
  );
}