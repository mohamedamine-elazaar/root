import { BrowserRouter, Routes, Link } from 'react-router-dom'


function Home() {
 return (
   <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl shadow-lg p-10 mt-8 mx-4">
     <h1 className="text-4xl font-extrabold text-gray-900 mb-4 drop-shadow">Welcome to our Moto Market</h1>
     <p className="text-lg text-gray-700 mb-8">Look at the categories to find your dream bike.</p>
     <Link to="/Categories">
       <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg shadow transition-all duration-200 text-lg">Categories</button>
     </Link>
   </div>
 )



}
export default Home






