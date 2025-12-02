import axios from "axios";
import { useEffect, useState } from "react";
import User from "./User";

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
               <User key={user.id} user={user} />
           ))}
        </div>
    );
};

export default Users;