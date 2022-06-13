import React from 'react';
import { PlusIcon } from '@heroicons/react/outline';
import { sidebarItemsData } from '../utils/sidebarItemsData';
import { collection, addDoc } from 'firebase/firestore';
import db from '../db/firebase';
import { useHistory } from 'react-router-dom';

export default function Sidebar({ rooms }) {
  const addChannel = () => {
    const channelName = prompt('Enter Channel Name');
    if (channelName) {
      addDoc(collection(db, 'rooms'), {
        name: channelName,
      });
    }
  };

  const history = useHistory();

  const goToChannel = (id) => {
    if (id) {
      history.push(`/room/${id}`);
    }
  };

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
            className="text-gray-300 grid grid-cols-sidebarChannel h-7 content-center pl-5 cursor-pointer hover:bg-[#350D36] items-center mb-2 "
          >
            <span className="mr-1"> {item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      <div className="text-gray-300 mt-3">
        <div className="flex justify-between items-center h-7 pl-5 pr-3">
          <div>Channels</div>
          <PlusIcon className="w-5 h-5 cursor-pointer" onClick={addChannel} />
        </div>
        <div>
          {rooms.map((room, idx) => (
            <div
              onClick={() => {
                goToChannel(room.id);
              }}
              key={idx}
              className="h-7 flex item-center pl-5 cursor-pointer hover:bg-[#350d36]"
            >
              # {room.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
