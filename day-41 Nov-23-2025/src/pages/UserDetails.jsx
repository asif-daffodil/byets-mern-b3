import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const UserDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, isFetching, isError, isSuccess } = useQuery({
        queryKey: ['user', id],
        queryFn: async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (!response) {
                throw new Error('Network response was not ok');
            }
            return response.data;
        }
    });

    return (
        <div>
            <Helmet>
                {isSuccess && <title>User Details {data?.name}</title>}
            </Helmet>
            {isFetching && <p>Loading...</p>}
            {isError && <p>Error fetching user data.</p>}
            {isSuccess && (
                <div className="p-4 mb-4 border rounded shadow text-center">
                    <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
                    <p className="text-gray-600 mb-1">Email: {data.email}</p>
                    <p className="text-gray-600 mb-1">Phone: {data.phone}</p>
                    <p className="text-gray-600 mb-1">Website: {data.website}</p>
                    <p className="text-gray-600">Company: {data.company.name}</p>
                    <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                        Go Back
                    </button>
                    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            )}
        </div>
    );
};

export default UserDetails;