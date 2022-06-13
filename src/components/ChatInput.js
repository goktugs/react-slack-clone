import React from 'react';

import { PaperAirplaneIcon } from '@heroicons/react/outline';

export default function ChatInput() {
  return (
    <div className="px-5 pb-6">
      <div className="border-[1px_solid_#8D8D8E] rounded-md">
        <form className=" flex h-11 items-center pl-3 ">
          <input
            className="flex-1 border-none text-sm focus:outline-none "
            type="text"
            placeholder="Message here..."
          />
          <div className="bg-[#007a5a] rounded-sm w-8 h-8 flex justify-center items-center mr-1 cursor-pointer">
            <PaperAirplaneIcon className="w-4 h-4 bg-[#D9D9D9] hover:bg-[#148567] " />
          </div>
        </form>
      </div>
    </div>
  );
}
