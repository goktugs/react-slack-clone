import React from 'react';
import ChatInput from './ChatInput.js';
import { InformationCircleIcon } from '@heroicons/react/outline';
import ChatMessage from './ChatMessage.js';

export default function Chat() {
  return (
    <div className="grid grid-rows-chat">
      <div className="px-5 flex items-center border-b-gray-500 justify-between ">
        <div>
          <div className="font-bold">Channel Name</div>
          <div className="font-normal text-[#606060] mt-2 text-sm  ">
            Channel Info
          </div>
        </div>
        <div className="flex items-center text-[#606060]  ">
          <div>Details</div>
          <InformationCircleIcon className="ml-3" />
        </div>
      </div>
      <div>
        {' '}
        <ChatMessage />{' '}
      </div>
      <ChatInput />
    </div>
  );
}
