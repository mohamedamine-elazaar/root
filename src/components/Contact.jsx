import { BrowserRouter, Routes, Link } from 'react-router-dom'
export default function Contact(){ 
        return (
            <div className="max-w-lg mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg flex flex-col items-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
                <form className="w-full flex flex-col gap-4">
                    <input name="name" placeholder="Your Name" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    <input name="email" placeholder="Your Email" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    <textarea name="message" placeholder="Your Message" className="border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-lg shadow transition-all duration-200 self-end">Send</button>
                </form>
            </div>
        )
}