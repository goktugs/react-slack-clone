import React from 'react';

export default function ChatMessage() {
  return (
    <div className="py-2 px-5 flex items-center  ">
      <div className="w-9 h-9 rounded-sm overflow-hidden mr-2 ">
        <img className="w-full" src="" alt="" />
      </div>
      <div>
        <div className="flex flex-col ">
          <span className="font-black  text-sm ">
            Goktug Sevgil{' '}
            <span className="font-normal text-[#616061] ml-2 text-sm ">
              13.06.2022
            </span>
          </span>
        </div>
        <div>
          <span></span>
        </div>
      </div>
    </div>
  );
}
