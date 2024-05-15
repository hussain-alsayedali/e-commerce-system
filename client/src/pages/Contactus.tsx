import React, {useState} from 'react'
import Sidebar from '../components/Sidebar.tsx';
import Dashboard from '../components/Dashboard.tsx';
import instance from '../api/axios.ts';

export default function Contactus() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState("")

  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      instance
        .post('/note/createNote', {
          name: name,
          email: email,
          message: message,
        })
        .then((response) => {
          alert('Note created successfully');
        })
        .catch((error) => {
          console.error('Note creation failed:', error);
          alert('Note creation failed: ' + error.response.data.message);
        });
    };
    
  const [sidebarToggle, setSidebarToggle] = useState(true);
    return (
      <>
      <Sidebar sidebarToggle={sidebarToggle} role="user"/>
      <Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
<div className="container mx-auto p-4 mt-10">
      <h1 className="text-3xl text-center mb-4">Contact Us</h1>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-bold mb-1">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3"
            required
          ></textarea>
        </div>
        <div className="text-center">
        <button className="bg-purple-800 text-white border-2 border-purple-800 hover:opacity-50 font-bold py-2 px-4 rounded">
        Send
        </button>

        <p className='text-center font-semibold mt-4'>{status}</p>
        </div>
      </form>
    </div>
    </>
  )
}
