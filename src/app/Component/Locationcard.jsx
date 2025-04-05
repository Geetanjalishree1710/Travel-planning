import { Button } from "@/components/ui/button";
import Link from "next/link";

  export default function LocationCard({id, city, description, image }) {
    return (
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">
        <img src={image} alt={city} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{city}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <Button className={"m-2"}>
            <Link href={`${id}`}>
            Visit
            </Link>
            </Button>
      </div>
    );
  }
  