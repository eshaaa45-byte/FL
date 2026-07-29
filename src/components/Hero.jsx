
// import heroImg from "../assets/hero.png";
import heroVideo from "../assets/hero.mp4";
import { ShieldCheck, Brain, Activity } from "lucide-react";
// import { ShieldCheck, Brain, Activity } from "lucide-react";

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

        {/* <div> */}

         {/* <img
            src={heroImg}
            alt="Hero"
            className="w-full"
         /> */}
     <div className="relative w-full">

  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full rounded-3xl shadow-2xl object-cover"
  >
    <source src={heroVideo} type="video/mp4" />
  </video>

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