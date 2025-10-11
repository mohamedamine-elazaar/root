export default function Admin() {
    return (
        <div className="max-w-2xl mx-auto mt-16 p-10 bg-white rounded-xl shadow-2xl flex flex-col items-center">
            <h1 className="text-4xl font-extrabold text-yellow-500 mb-6">Admin Dashboard</h1>
            <p className="text-lg text-gray-700 mb-8 text-center">Welcome, admin! Here you can manage products, view orders, and update site content.</p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <button className="bg-gray-900 text-yellow-400 font-bold py-3 px-6 rounded-lg shadow hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200">Manage Products</button>
                <button className="bg-gray-900 text-yellow-400 font-bold py-3 px-6 rounded-lg shadow hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200">View Orders</button>
                <button className="bg-gray-900 text-yellow-400 font-bold py-3 px-6 rounded-lg shadow hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200">Update Content</button>
                <button className="bg-gray-900 text-yellow-400 font-bold py-3 px-6 rounded-lg shadow hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200">Settings</button>
            </div>
        </div>
    );
}