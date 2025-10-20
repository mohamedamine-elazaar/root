import { Link } from 'react-router-dom'


function Navbar() {
  return (
    
 <nav className="flex items-center justify-between px-12 py-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-2xl rounded-b-2xl border-b-4 border-yellow-400">
   <Link to="/" className="text-4xl font-black tracking-widest text-yellow-400 drop-shadow-xl">motohouse</Link>
   <div className="flex gap-12">
     <Link to="/" className="px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400">Home</Link>
     <Link to="/categories" className="px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400">Categories</Link>
     <Link to="/contact" className="px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400">Contact</Link>
      <Link to="/login" className="px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400">Login</Link>
      <Link to="/register" className="px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400">Register</Link>
   </div>
 </nav>


  )
}
    
export default Navbar


