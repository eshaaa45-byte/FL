// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// import logo from "./assets/ucp-logo.png";

// export default function Navbar() {

//     const [open,setOpen]=useState(false);

//     return(

// <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-lg">

// <div className="max-w-7xl mx-auto px-8">

// <div className="flex justify-between items-center h-20">

// <div className="flex items-center gap-4">

// <img
// src={logo}
// alt=""
// className="w-14 h-14 object-contain"
// />

// <div>

// <h1 className="text-lg font-bold text-slate-800">
// University of Central Punjab
// </h1>

// <p className="text-xs text-slate-500">
// Federated Learning–Based Diabetes Risk Stratification under Non-IID Hospital Data for Privacy-Preserving Medical Diagnosis
// </p>

// </div>

// </div>

// <div className="hidden lg:flex items-center gap-10">

// <a href="#home" className="nav-link">
// Home
// </a>

// <a href="#about" className="nav-link">
// About
// </a>

// <a href="#features" className="nav-link">
// Features
// </a>

// <a href="#workflow" className="nav-link">
// Workflow
// </a>

// <a href="#architecture" className="nav-link">
// Architecture
// </a>

// <a href="#gallery" className="nav-link">
// Gallery
// </a>

// <a href="#technology" className="nav-link">
// Technology
// </a>

// <a href="#team" className="nav-link">
// Team
// </a>

// <a
// href="https://diabetes-risk-prediction-project-qx1z47eqh-fyp-g03.vercel.app/"
// target="_blank"
// rel="noreferrer"
// className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition font-semibold shadow-lg"
// >

// Live Demo

// </a>

// </div>

// <button

// className="lg:hidden"

// onClick={()=>setOpen(!open)}

// >

// {

// open ?

// <X size={30}/>

// :

// <Menu size={30}/>

// }

// </button>

// </div>

// </div>

// {

// open && (

// <div className="lg:hidden bg-white shadow-xl px-8 py-6 flex flex-col gap-5">

// <a href="#home">Home</a>

// <a href="#about">About</a>

// <a href="#features">Features</a>

// <a href="#workflow">Workflow</a>

// <a href="#architecture">Architecture</a>

// <a href="#gallery">Gallery</a>

// <a href="#technology">Technology</a>

// <a href="#team">Team</a>

// <a
// href="https://diabetes-risk-prediction-project-qx1z47eqh-fyp-g03.vercel.app/"
// className="bg-blue-600 text-center text-white rounded-full py-3"
// >

// Open System

// </a>

// </div>

// )

// }

// </nav>

//     )

// }

import logo from "../assets/ucp-logo.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow">

      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">

        {/* <div className="flex items-center gap-4">

          <img
            src={logo}
            className="w-14"
          />

          <div>

            <h2 className="font-black text-xl">
              Federated Diabetes AI
            </h2>

            <p className="text-sm text-gray-500">
              University of Central Punjab
            </p>

          </div> */}
<div className="flex items-center gap-3 flex-1 min-w-0">
  <img
    src={logo}
    alt="UCP Logo"
    className="w-14 h-14 md:w-16 md:h-16 object-contain flex-shrink-0"
  />

  <div className="min-w-0">
    <h1 className="font-bold text-lg md:text-3xl text-slate-900 truncate">
      Federated Diabetes AI
    </h1>

    <p className="text-gray-600 text-sm md:text-base truncate">
      University of Central Punjab
    </p>
  </div>
 </div>
        

        {/* <a

          href="https://diabetes-risk-prediction-project-qx1z47eqh-fyp-g03.vercel.app/"

          target="_blank"

          className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700"

        >

          Open System

        </a> */}
<a
  href="https://diabetes-risk-prediction-project-qx1z47eqh-fyp-g03.vercel.app/"
  className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-8 py-3 rounded-2xl font-semibold whitespace-nowrap flex-shrink-0"
>
  Open System
</a>
      </div>

    </nav>
  );
}