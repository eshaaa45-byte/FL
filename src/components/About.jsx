// import {
//   Shield,
//   Brain,
//   Hospital,
//   Lock,
//   Database,
//   Activity
// } from "lucide-react";

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="py-24 bg-white"
//     >
//       <div className="max-w-7xl mx-auto px-8">

//         <div className="text-center mb-16">

//           <span className="text-blue-600 font-bold tracking-widest">
//             ABOUT OUR PROJECT
//           </span>

//           <h2 className="text-5xl font-black text-slate-800 mt-4">
//             Privacy-Preserving Diabetes
//             <span className="text-blue-600">
//               {" "}Risk Prediction
//             </span>
//           </h2>

//           <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
//             Our system enables hospitals to collaboratively train
//             Artificial Intelligence models without sharing raw patient
//             data, ensuring both privacy and high predictive accuracy.
//           </p>

//         </div>

//         <div className="grid lg:grid-cols-2 gap-10">

//           <div className="bg-blue-50 rounded-3xl p-8">

//             <h3 className="text-3xl font-bold mb-6 text-slate-800">
//               Problem Statement
//             </h3>

//             <p className="text-gray-600 leading-8">
//               Traditional centralized AI systems require hospitals to
//               share sensitive patient records with a central server.
//               This creates serious privacy, security, ethical, and
//               legal concerns in healthcare environments.
//             </p>

//             <div className="mt-8 space-y-5">

//               <Feature
//                 icon={<Database />}
//                 title="Raw Patient Data Exposure"
//               />

//               <Feature
//                 icon={<Lock />}
//                 title="Privacy & Security Risks"
//               />

//               <Feature
//                 icon={<Hospital />}
//                 title="Hospitals Cannot Share Data"
//               />

//             </div>

//           </div>

//           <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">

//             <h3 className="text-3xl font-bold mb-6">
//               Our Solution
//             </h3>

//             <p className="leading-8 text-blue-100">
//               We developed a Federated Learning based Diabetes Risk
//               Prediction System where hospitals train local models
//               independently and only encrypted model parameters are
//               shared for global aggregation.
//             </p>

//             <div className="mt-8 space-y-5">

//               <FeatureWhite
//                 icon={<Brain />}
//                 title="Federated Learning"
//               />

//               <FeatureWhite
//                 icon={<Shield />}
//                 title="Differential Privacy"
//               />

//               <FeatureWhite
//                 icon={<Lock />}
//                 title="AES Encryption"
//               />

//               <FeatureWhite
//                 icon={<Activity />}
//                 title="Real-Time Diabetes Prediction"
//               />

//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// function Feature({ icon, title }) {
//   return (
//     <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow">

//       <div className="text-blue-600">
//         {icon}
//       </div>

//       <h3 className="font-semibold text-slate-700">
//         {title}
//       </h3>

//     </div>
//   );
// }

// function FeatureWhite({ icon, title }) {
//   return (
//     <div className="flex items-center gap-4 bg-white/10 backdrop-blur p-5 rounded-2xl">

//       <div>
//         {icon}
//       </div>

//       <h3 className="font-semibold">
//         {title}
//       </h3>

//     </div>
//   );
// }

import {
  Hospital,
  Lock,
  BrainCircuit,
  Database
} from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-black">

            About Our Project

          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto">

            This Final Year Project presents a privacy-preserving federated learning framework that enables hospitals to collaboratively improve diabetes risk prediction while maintaining complete patient confidentiality.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <Card
            icon={<Hospital />}
            title="Multi Hospital"
            text="Three hospitals collaboratively train AI models."
          />

          <Card
            icon={<Lock />}
            title="Privacy Preserving"
            text="Patient data never leaves hospital servers."
          />

          <Card
            icon={<BrainCircuit />}
            title="AI Powered"
            text="Deep Learning model predicts Low, Medium and High Risk."
          />

          <Card
            icon={<Database />}
            title="Non-IID Data"
            text="Designed for heterogeneous hospital datasets."
          />

        </div>

      </div>

    </section>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="rounded-3xl shadow-lg p-8">

      <div className="text-blue-600">

        {icon}

      </div>

      <h3 className="font-bold text-xl mt-5">

        {title}

      </h3>

      <p className="mt-4 text-gray-600 leading-8">

        {text}

      </p>

    </div>
  );
}