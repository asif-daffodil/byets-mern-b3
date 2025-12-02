import { Link } from "react-router";

const User = ({user}) => {
    return (
        <div className="p-4 mb-4 border rounded shadow">
            <Link className="text-xl font-bold" to={`/single-user/${user.id}`}>{user.name}</Link>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
        </div>
    );
};

export default User;