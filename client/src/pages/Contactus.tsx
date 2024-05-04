import React, {useState} from 'react'

export default function Contactus() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState("")

  
    const handleSubmit = (e: any) => {
      e.preventDefault();

      
      // Handle form submission logic here
      fetch("", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name, email, message})
      })
        .then(response => {
          if(!response.ok){
              throw new Error("Message failed to sent")
          }
          return response.json()
          })
        .then(data => {
            setStatus("Message sent successfullu")
        })
        .catch(err => setStatus("Message cannot be sent, you can try later:("))
    };
  return (
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
        <button className="bg-purple-800 text-white border-2 border-purple-800 hover:opacity-50 font-bold py-2 px-4 rounded" onClick={handleSubmit}>
        Send
        </button>

        <p className='text-center font-semibold mt-4'>{status}</p>
        </div>
      </form>
    </div>
  )
}
