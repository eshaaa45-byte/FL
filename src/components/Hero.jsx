// import {
//   ArrowRight,
//   PlayCircle,
//   ShieldCheck,
//   Brain,
//   Activity,
//   Lock
// } from "lucide-react";

// import hero from "../assets/hero.png";

// export default function Hero() {

// return(

// <section
// id="home"
// className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-cyan-100 pt-28"
// >

// <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

// <div>

// <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full mb-6">

// <ShieldCheck size={18}/>

// <span className="font-semibold">

// Privacy Preserving Healthcare AI

// </span>

// </div>

// <h1 className="text-6xl font-black leading-tight text-slate-800">

// Federated Learning Based

// <span className="text-blue-600">

// {" "}Diabetes Risk{" "}

// </span>

// Prediction System

// </h1>

// <p className="text-lg text-slate-600 mt-8 leading-9">

// A privacy-preserving Artificial Intelligence platform that enables
// multiple hospitals to collaboratively train diabetes prediction models
// without sharing sensitive patient data.

// Built using

// <strong> Flower Federated Learning</strong>,

// <strong> PyTorch</strong>,

// <strong> Differential Privacy</strong>,

// <strong> AES Encryption</strong>

// and

// <strong> MongoDB.</strong>

// </p>

// <div className="flex flex-wrap gap-5 mt-10">

// <a

// href="https://diabetes-risk-prediction-project-qx1z47eqh-fyp-g03.vercel.app/"

// target="_blank"

// rel="noreferrer"

// className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-full text-white font-bold flex items-center gap-3 shadow-xl"

// >

// Launch Live System

// <ArrowRight size={20}/>

// </a>

// <button

// className="border-2 border-blue-600 px-8 py-4 rounded-full font-bold text-blue-600 flex items-center gap-3 hover:bg-blue-50 transition"

// >

// <PlayCircle/>

// Watch Demo

// </button>

// </div>

// <div className="grid grid-cols-3 gap-5 mt-16">

// <div className="bg-white rounded-2xl shadow-lg p-5">

// <h3 className="text-4xl font-black text-blue-600">

// 95%

// </h3>

// <p className="text-gray-500">

// Prediction Accuracy

// </p>

// </div>

// <div className="bg-white rounded-2xl shadow-lg p-5">

// <h3 className="text-4xl font-black text-green-600">

// 3

// </h3>

// <p className="text-gray-500">

// Hospitals

// </p>

// </div>

// <div className="bg-white rounded-2xl shadow-lg p-5">

// <h3 className="text-4xl font-black text-purple-600">

// 100%

// </h3>

// <p className="text-gray-500">

// Privacy

// </p>

// </div>

// </div>

// </div>

// <div className="relative">

// <img

// src={hero}

// alt=""

// className="w-full animate-float"

// />

// <div className="absolute top-8 left-0 bg-white rounded-2xl shadow-xl p-5">

// <div className="flex items-center gap-3">

// <Brain className="text-blue-600"/>

// <div>

// <h3 className="font-bold">

// AI Prediction

// </h3>

// <p className="text-sm text-gray-500">

// Real-Time Diagnosis

// </p>

// </div>

// </div>

// </div>

// <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-xl p-5">

// <div className="flex items-center gap-3">

// <Activity className="text-green-600"/>

// <div>

// <h3 className="font-bold">

// Federated Learning

// </h3>

// <p className="text-sm text-gray-500">

// Collaborative Training

// </p>

// </div>

// </div>

// </div>

// <div className="absolute bottom-0 left-12 bg-white rounded-2xl shadow-xl p-5">

// <div className="flex items-center gap-3">

// <Lock className="text-purple-600"/>

// <div>

// <h3 className="font-bold">

// AES + DP

// </h3>

// <p className="text-sm text-gray-500">

// Privacy Protected

// </p>

// </div>

// </div>

// </div>

// </div>

// </div>

// </section>

// )

// }

import heroImg from "../assets/hero.png";
import { ShieldCheck, Brain, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <span className="px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold">

            FINAL YEAR PROJECT 2026

          </span>

          {/* <h1 className="mt-8 text-6xl font-black leading-tight"> */}
          <h1 className="mt-8 text-6xl font-black leading-tight text-white">

            Federated Learning Based

            {/* <span className="text-blue-600"> */}
          <span className="text-cyan-400">
              {" "}Diabetes Risk Stratification

            </span>

          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-600">

            A privacy-preserving Artificial Intelligence platform that enables multiple hospitals to collaboratively train diabetes prediction models without sharing raw patient data.

          </p>

          <div className="mt-10 flex gap-4">

            <a

              href="https://diabetes-risk-prediction-project-qx1z47eqh-fyp-g03.vercel.app/"

              className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold"

            >

              Explore Project

            </a>

          </div>

          <div className="grid grid-cols-3 gap-6 mt-14">

            <Feature
              icon={<ShieldCheck />}
              title="AES Encryption"
            />

            <Feature
              icon={<Brain />}
              title="Federated AI"
            />

            <Feature
              icon={<Activity />}
              title="Realtime Prediction"
            />

          </div>

        </div>

        <div>

          {/* <img

            src={heroImg}

            className="rounded-3xl shadow-2xl"

          /> */}
         {/* <img src={HeroImg} /> */}
         <img
            src={heroImg}
            alt="Hero"
            className="w-full"
         />

        </div>

      </div>

    </section>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 text-center">

      <div className="text-blue-600 flex justify-center">

        {icon}

      </div>

      <h3 className="mt-4 font-bold">

        {title}

      </h3>

    </div>
  );
}