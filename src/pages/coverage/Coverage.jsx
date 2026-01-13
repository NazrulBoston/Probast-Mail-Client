import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";





/**
 * FlyToState
 * -------------------
 * This component controls the map movement.
 * When selectedState changes, the map smoothly
 * moves (flyTo) to that state's location.
 */
const FlyToState = ({ selectedState }) => {
  const map = useMap();

  if (selectedState) {
    map.flyTo(
      [selectedState.lat, selectedState.lng], // destination
      8,                                      // zoom level
      { duration: 2 }                         // smooth animation
    );
  }

  return null;
};



const Coverage = () => {
  // Center of USA
  const usaPosition = [39.8283, -98.5795];
  // Store search input value
  const [searchText, setSearchText] = useState("");

  // Store selected state object
  const [selectedState, setSelectedState] = useState(null);

  const [usStates, setUsStates] = useState([]);


  useEffect(() => {
    fetch("/data/usStates.json")
      .then((res) => res.json())
      .then((data) => setUsStates(data))
      .catch((error) => console.error("Error loading states:", error));
  }, []);




  /**
 * handleSearch
 * -------------------
 * Finds the state by name and updates selectedState
 * Triggers map flyTo animation
 */
  const handleSearch = () => {
    if (!searchText.trim()) return;

    const foundState = usStates.find(
      (state) =>
        state.name.toLowerCase() === searchText.toLowerCase()
    );

    setSelectedState(foundState || null);
  };


  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-6">
        We are available in 50 states
      </h1>

      {/* Search Box */}
      {/* Search Box */}
      <div className="flex justify-center mb-6">
        <div className="join w-full max-w-md">

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search state name..."
            className="input input-bordered join-item w-full"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              // Allow search using Enter key
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          {/* Search Button */}
          <button
            className="btn btn-primary join-item"
            onClick={handleSearch}
            aria-label="Search state"
          >
            <FaSearch />
          </button>
        </div>
      </div>




      {/* Map Section */}
      <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
        <MapContainer center={usaPosition} zoom={4} className="h-full w-full">

          {/* Smooth zoom & move to searched state */}
          <FlyToState selectedState={selectedState} />


          {/* Map Tiles */}
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Marker */}
          {/* 
  Render markers for each US state
  --------------------------------
  We loop through usStates array and place
  a marker using each state's lat & lng
*/}
          {usStates.map((state, index) => (
            <Marker
              key={index}
              position={[state.lat, state.lng]}
              eventHandlers={{
                mouseover: (e) => e.target.openPopup(),
                mouseout: (e) => e.target.closePopup(),

                // ✅ ADD THIS
                click: () => {
                  setSelectedState(state);     // same as search result
                  setSearchText(state.name);   // optional: show name in input
                },
              }}
            >

              <Popup>
                <strong>{state.name}</strong>
                <br />
                {state.address}
                <br />
                Delivery service available
              </Popup>
            </Marker>
          ))}

        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
