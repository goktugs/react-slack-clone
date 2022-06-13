import React, { useEffect, useState } from 'react';
import ChatInput from './ChatInput.js';
import { InformationCircleIcon } from '@heroicons/react/outline';
import ChatMessage from './ChatMessage.js';
import db from '../db/firebase.js';
import { useParams } from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';
import firebase from 'firebase';

export default function Chat({ user }) {
  let { channelId } = useParams();

  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    if (channelId) {
      let payload = {
        text: text,
        timestamp: firebase.firestore.Timestamp.now(),
        user: user.name,
        userImage: user.photo,
      };

      db.collection('rooms').doc(channelId).collection('messages').add(payload);
    }
  };

  const getMessages = () => {
    db.collection('rooms')
      .doc(channelId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .snapshot((snapshot) => {
        let messages = snapshot.docs.map((doc) => doc.data());
        setMessages(messages);
      });
  };

  const getChannel = () => {
    db.collection('rooms')
      .doc(channelId)
      .onSnapShot((snapshot) => {
        setChannel(snapshot);
      });
  };

  useEffect(() => {
    getChannel();
    getMessages();
  }, [channelId]);

  return (
    <div className="grid grid-rows-chat min-h-0">
      <div className="px-5 flex items-center border-b-gray-500 justify-between ">
        <div>
          <div className="font-bold"> {channel && channel.name} </div>
          <div className="font-normal text-[#606060] mt-2 text-sm  ">
            Channel Info
          </div>
        </div>
        <div className="flex items-center text-[#606060]  ">
          <div>Details</div>
          <InformationCircleIcon className="ml-3" />
        </div>
      </div>
      <div className="flex flex-col overflow-y-scroll">
        {messages.length > 0 &&
          messages.map((data, index) => (
            <ChatMessage
              text={data.text}
              name={data.user}
              image={data.userImage}
              timestamp={data.timestamp}
            />
          ))}
      </div>
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
}
