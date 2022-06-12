import React from 'react';
import { ClockIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline';

export default function Header() {
  return (
    <div className="bg-purple-800 text-white flex items-center justify-between">
      <leftPart className="flex mx-4">
        <ClockIcon className="h-5 w-5 text-white" />
        <searchContainer className="min-w-[400px] mx-4 ">
          <search className="flex items-center rounded-md w-full shadow-inner">
            <input
              className="bg-transparent border-none px-2 text-white py-1 focus:outline-none"
              type="text"
              placeholder="Search..."
            />
          </search>
        </searchContainer>
        <QuestionMarkCircleIcon className="h-5 w-5 text-white" />
      </leftPart>
      <userContainer className="flex items-center pr-4">
        <name className="pr-4">Goktug</name>
        <userImage className="w-7 h-7 border-2 border-solid border-white rounded-sm">
          <img
            className="w-full"
            src="https://picsum.photos/id/237/28/28"
            alt="profile"
          />
        </userImage>
      </userContainer>
    </div>
  );
}
