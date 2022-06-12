import React from 'react';

export default function Container({ children }) {
  return (
    <div className="w-full h-screen grid grid-rows-container ">{children}</div>
  );
}
