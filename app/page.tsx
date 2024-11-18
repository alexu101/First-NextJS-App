'use client'

import Hello from "./components/hello";

export default function Home() {
  console.log("what am I?")
  return (
    <>
      <h1 className="text-3xl">Welcome to Next.js</h1>
      <Hello></Hello>
    </>
    
  );
}
