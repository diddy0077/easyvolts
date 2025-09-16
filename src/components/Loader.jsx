
import React from 'react';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <div className="flex space-x-2">
        {/* Dot 1 */}
        <div className="w-4 h-4 rounded-full bg-white animate-bounce-slow" style={{ animationDelay: '0s' }}></div>
        {/* Dot 2 */}
        <div className="w-4 h-4 rounded-full bg-white animate-bounce-slow" style={{ animationDelay: '0.2s' }}></div>
        {/* Dot 3 */}
        <div className="w-4 h-4 rounded-full bg-white animate-bounce-slow" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
}