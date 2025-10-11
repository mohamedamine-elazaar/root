import { BrowserRouter } from "react-router-dom"




function Categories(){
        return(
            <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Categories</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center shadow">
                        <img src="https://content.avito.ma/classifieds/images/10136210600?t=images" height="150 px" width="auto" alt="33" /><br />
                        <strong className="text-xl mb-2 text-yellow-600">Becane 33</strong>
                        <p className="text-gray-700 mb-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia odio, hic dicta neque nobis</p>
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-lg shadow transition-all duration-200">Buy Now</button>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center shadow">
                        <img src="https://www.biker.ma/uploads/fiche-technique/docker/C50/docker-c50-neuve-maroc-05.jpg" height="150 px" width="auto" alt="c50" /><br />
                        <strong className="text-xl mb-2 text-yellow-600">Docker C50</strong>
                        <p className="text-gray-700 mb-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia odio, hic dicta neque nobis</p>
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-lg shadow transition-all duration-200">Buy Now</button>
                    </div>
                </div>
            </div>
        )
}





export default Categories