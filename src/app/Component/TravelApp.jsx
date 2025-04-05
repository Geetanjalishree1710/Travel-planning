import LocationCard from "./Locationcard";

import { travelData } from "@/data/LocationData"; 

export default function Home() {

  return (
    <div>
      
      <div className="h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Plan Your Dream Trip</h1>
        <input
          type="text"
          placeholder="Search destinations..."
          className="w-full max-w-md p-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {travelData.map((loc, index) => (
          <LocationCard key={index} {...loc} />
        ))}
      </div>
    </div>
  );
}
