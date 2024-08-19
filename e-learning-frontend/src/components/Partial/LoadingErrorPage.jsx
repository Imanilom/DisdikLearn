import React from 'react';

const LoadingErrorPage = ({ loading, error }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-red-500">Error: {error}</p>
      </div>
    );
  }

  return null; // Return nothing if there's no loading or error
};

export default LoadingErrorPage;
