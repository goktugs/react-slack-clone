import React from 'react';
import { PlusIcon } from '@heroicons/react/outline';
import { sidebarItemsData } from '../utils/sidebarItemsData';

export default function Sidebar({ rooms }) {
  console.log(rooms);

  return (
    <div className="bg-[#3F0E40]">
      <div className="text-white h-16 flex items-center pl-5 justify-between border-b-2 border-solid border-[#522753]">
        <div>Goko</div>
        <div className="bg-white fill-[#3F0E40] text-[#3F0E40] flex align-center justify-center rounded-full mr-5 cursor-pointer ">
          <PlusIcon className="w-9 h-9 " />
        </div>
      </div>
      <div className="pt-5">
        {sidebarItemsData.map((item, idx) => (
          <div
            key={idx}
            className="text-gray-500 grid grid-cols-sidebarChannel h-7 item-center pl-5 cursor-pointer hover:bg-[#350D36] "
          >
            {item.icon}
            {item.text}
          </div>
        ))}
      </div>
      <div className="text-gray-500 mt-3">
        <div className="flex justify-between items-center h-7 pl-5 pr-3">
          <div>channels</div>
          <PlusIcon className="w-5 h-5" />
        </div>
        <div>
          {rooms.map((room) => (
            <div className="h-7 flex item-center pl-5 cursor-pointer hover:bg-[#350d36]">
              # {room.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
