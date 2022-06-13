import React from 'react';

export default function ChatMessage({ text, name, image, timestamp }) {
  return (
    <div className="py-2 px-5 flex items-center  ">
      <div className="w-9 h-9 rounded-sm overflow-hidden mr-2 ">
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="flex flex-col ">
        <span className="font-black  text-sm ">
          {name}
          <span className="font-normal text-[#616061] ml-2 text-sm ">
            {new Date(timestamp.toDate()).toUTCString()}
          </span>
        </span>
        <div>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
}
