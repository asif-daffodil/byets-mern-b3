import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        })();
    }, []);

    return (
        <div className="grid md:grid-cols-3 gap-3 p-3">
           {users.map(user => (
               <div key={user.id} className="p-4 mb-4 border rounded shadow">
                   <h2 className="text-xl font-bold">{user.name}</h2>
                    <p className="text-gray-600">{user.email}</p>
                    <p className="text-gray-600">{user.phone}</p>
               </div>
           ))}
        </div>
    );
};

export default Users;