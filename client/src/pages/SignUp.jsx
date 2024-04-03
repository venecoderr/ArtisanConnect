// client/src/pages/Home.jsx
import React from "react";
import SignUpForm from '../components/SignUpForm'; // Adjust the path if needed

export default function Home() {
  return (
    <div id='main'>
      {/* Render only the SignUpForm */}
      <SignUpForm />
    </div>
  );
}
