export default function Navbar() {
    return (
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-blue-600">Travel Planner</h2>
        <ul className="flex gap-6 text-gray-700">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Destinations</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>
      </nav>
    );
  }
  