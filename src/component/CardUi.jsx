/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const CardUi = ({ title, value, icon }) => {
    return (
      <div className="bg-white shadow-md rounded-md p-6">
        <div className="flex items-center mb-4">
          <span className={`text-2xl mr-4 ${icon}`}></span>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    );
  }

export default CardUi




export const MetricsCard = ({ title, value, description }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-3xl font-bold mb-4">{value}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};


