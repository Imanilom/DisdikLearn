import React from "react";
import ManageUsers from "./AdminPage/UserManagement";
import ManageBadges from "./AdminPage/BadgeManagement";

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ManageUsers />
        <ManageBadges />
      </div>
    </div>
  );
};

export default AdminPage;
