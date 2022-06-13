import React from 'react';
import { ClockIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline';

export default function Header({ user }) {
  return (
    <div className="bg-[#350D36] text-white flex items-center justify-center relative z-10 shadow-[0_1px_0_0_rgba(255,255,255,0.1)]">
      <div className="flex mx-4">
        <ClockIcon className="h-5 w-5 text-white" />
        <div className="min-w-[400px] mx-4 ">
          <div className="flex items-center rounded-md w-full shadow-inner">
            <input
              className="bg-transparent border-none px-2 text-white py-1 focus:outline-none"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        <QuestionMarkCircleIcon className="h-5 w-5 text-white" />
      </div>
      <div className="flex items-center pr-4 absolute right-0">
        <div className="pr-4"> {user.name} </div>
        <div className="w-7 h-7 border-2 border-solid border-white rounded-sm">
          <img
            className="w-full"
            src={user.photo ? user.photo : 'https://picsum.photos/id/237/28/28'}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}
