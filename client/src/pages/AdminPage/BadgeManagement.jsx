import React, { useState, useEffect } from "react";
import axios from "axios";

const BadgeManagement = () => {
  const token = localStorage.getItem('token');
  const [badges, setBadges] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pointsRequired, setPointsRequired] = useState(0);
  const [editingBadgeId, setEditingBadgeId] = useState(null);

  useEffect(() => {
    fetchBadges();
  }, []);

  const fetchBadges = async () => {
    try {
      const response = await axios.get("/api/badges", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBadges(response.data);
    } catch (error) {
      console.error("Error fetching badges:", error);
    }
  };

  const handleAddBadge = async () => {
    try {
      const newBadge = { name, description, pointsRequired };
      await axios.post("/api/badges", newBadge, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchBadges();
      setName("");
      setDescription("");
      setPointsRequired(0);
    } catch (error) {
      console.error("Error adding badge:", error);
    }
  };

  const handleUpdateBadge = async (id) => {
    try {
      const updatedBadge = { name, description, pointsRequired };
      await axios.put(`/api/badges/${id}`, updatedBadge, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchBadges();
      setEditingBadgeId(null);
      setName("");
      setDescription("");
      setPointsRequired(0);
    } catch (error) {
      console.error("Error updating badge:", error);
    }
  };

  const handleDeleteBadge = async (id) => {
    if (window.confirm("Are you sure you want to delete this badge?")) {
      try {
        await axios.delete(`/api/badges/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        fetchBadges();
      } catch (error) {
        console.error("Error deleting badge:", error);
      }
    }
  };

  const startEditing = (badge) => {
    setEditingBadgeId(badge._id);
    setName(badge.name);
    setDescription(badge.description);
    setPointsRequired(badge.pointsRequired);
  };

  const cancelEditing = () => {
    setEditingBadgeId(null);
    setName("");
    setDescription("");
    setPointsRequired(0);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Badge Management</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Badge Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded px-4 py-2 mr-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded px-4 py-2 mr-2"
        />
        <input
          type="number"
          placeholder="Points Required"
          value={pointsRequired}
          onChange={(e) => setPointsRequired(Number(e.target.value))}
          className="border rounded px-4 py-2 mr-2"
        />
        {editingBadgeId ? (
          <>
            <button
              onClick={() => handleUpdateBadge(editingBadgeId)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Update Badge
            </button>
            <button
              onClick={cancelEditing}
              className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleAddBadge}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Badge
          </button>
        )}
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Points Required</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {badges.map((badge) => (
            <tr key={badge._id}>
              <td className="py-2 px-4 border-b">{badge.name}</td>
              <td className="py-2 px-4 border-b">{badge.description}</td>
              <td className="py-2 px-4 border-b">{badge.pointsRequired}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => startEditing(badge)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteBadge(badge._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BadgeManagement;
