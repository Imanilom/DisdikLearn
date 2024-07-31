import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const UserList = () => {
  const user = useSelector((state) => state.auth.user);
  const token = localStorage.getItem('token');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!user || user.role !== 'admin') return;
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('http://localhost:3000/api/auth/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Log the response to check its structure
        // console.log('API Response:', response);

        // Assuming the response data is an array
        setUsers(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        setError(err.message || 'Error fetching users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [user]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">User List</h1>
      <ul className="mt-4">
        {Array.isArray(users) && users.length > 0 ? (
          users.map((user) => (
            <li key={user._id} className="border p-2 mb-2">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Role:</strong> {user.role}</p>
              <p><strong>points:</strong> {user.points}</p>
            </li>
          ))
        ) : (
          <p>No users available</p>
        )}
      </ul>
    </div>
  );
};

export default UserList;
