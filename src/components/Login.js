import React from 'react';
import { auth, provider } from '../db/firebase';
import { signInWithPopup } from 'firebase/auth';

export default function Login(props) {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          photo: result.user.photoURL,
        };
        props.setUser(newUser);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        // The email of the user's account used.
        const email = err.customData.email;
      });
  };

  return (
    <div className="w-full h-screen bf-[#f8f8f8] flex justify-center item-center flex-col  ">
      <div className=" bg-white p-24 rounded-md shadow-2xl flex flex-col m-auto  justify-center items-center ">
        <img
          src="https://toppng.com/uploads/preview/slack-new-logo-icon-11609376883z32jbkf8kg.png"
          alt="slackLogo"
          className=" h-24 "
        />
        <h1 className="font-bold text-4xl ">Sign in Slack</h1>
        <div className="mt-12">
          <button
            onClick={() => {
              signIn();
            }}
            className=" bg-[#0a8d48] text-white border-none h-10 rounded-md cursor-pointer text-sm px-4"
          >
            Sign In Button
          </button>
        </div>
      </div>
    </div>
  );
}
