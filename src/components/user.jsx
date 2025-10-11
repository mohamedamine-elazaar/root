export default function User() {
    return (
        <div className="max-w-2xl mx-auto mt-16 p-10 bg-white rounded-xl shadow-2xl flex flex-col items-center">
            <h1 className="text-4xl font-extrabold text-yellow-500 mb-6">User Dashboard</h1>
            <p className="text-lg text-gray-700 mb-8 text-center">Welcome! Here you can view your orders, update your profile, and manage your wishlist.</p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <button className="bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg shadow hover:bg-gray-900 hover:text-yellow-400 transition-all duration-200">My Orders</button>
                <button className="bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg shadow hover:bg-gray-900 hover:text-yellow-400 transition-all duration-200">Profile</button>
                <button className="bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg shadow hover:bg-gray-900 hover:text-yellow-400 transition-all duration-200">Wishlist</button>
                <button className="bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg shadow hover:bg-gray-900 hover:text-yellow-400 transition-all duration-200">Settings</button>
            </div>
        </div>
    );
}