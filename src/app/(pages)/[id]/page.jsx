
import { travelData } from "@/data/LocationData";



  
  export default async function  Page({ params }) {
    const { id } = await params

  const cityData = travelData.find((city) => city.id === id);
 const { city,
    image,
    placesToVisit,
    hotels,
    foodCost,
    visaCost,
    travelCost} = cityData
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-2 text-blue-700">{city}</h2>
        <img src={image} alt={city} className="w-full h-[50vh] object-cover rounded-lg mb-4" />
  
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">🏛️ Places to Visit:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {placesToVisit.map((place, index) => (
              <div key={index} className="bg-gray-100 rounded p-2 text-center">
                <img src={place.image} alt={place.name} className="h-52 object-center w-full object-cover rounded mb-2" />
                <p className="font-medium">{place.name}</p>
              </div>
            ))}
          </div>
        </div>
  
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">🏨 Hotels:</h3>
          <ul className="list-disc pl-5">
            {hotels.map((hotel, index) => (
              <li key={index}>
                {hotel.name} - <span className="text-green-600">${hotel.pricePerNight}/night</span>
              </li>
            ))}
          </ul>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
          <div className="bg-blue-50 p-3 rounded">
            <strong>🍽️ Avg. Food Cost:</strong> ${foodCost}/day
          </div>
          <div className="bg-blue-50 p-3 rounded">
            <strong>🛂 Visa Cost (from India):</strong> ${visaCost}
          </div>
          <div className="bg-blue-50 p-3 rounded">
            <strong>✈️ Travel Cost (from India):</strong> ${travelCost}
          </div>
        </div>
      </div>
    );
  }
  