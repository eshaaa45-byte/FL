import {

  Globe,
  Mail,
  ShieldCheck
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-3 gap-10">

          <div>

            <h2 className="text-3xl font-black">
              Diabetes Risk AI
            </h2>

            <p className="mt-5 text-slate-300 leading-8">
              Privacy-Preserving Federated Learning System for
              Secure Diabetes Risk Prediction across Multiple Hospitals.
            </p>

          </div>

          <div>

            <h3 className="font-bold text-xl mb-5">
              Project
            </h3>

            <ul className="space-y-3 text-slate-300">

              <li>React + Vite</li>

              <li>Node.js + Express</li>

              <li>MongoDB Atlas</li>

              <li>Flower + PyTorch</li>

              <li>Differential Privacy</li>

              <li>AES Encryption</li>

            </ul>

          </div>

          <div>

            <h3 className="font-bold text-xl mb-5">
              Links
            </h3>

            <div className="space-y-4">

              <a
                href="https://diabetes-risk-prediction-project-qx1z47eqh-fyp-g03.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-cyan-400"
              >
                <Globe size={20} />
                Live Website
              </a>

              {/* <a
                href="https://github.com/eshaaa45-byte/DiabetesRiskPredictionProject"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-cyan-400"
              >
                <Github size={20} />
                GitHub Repository
              </a> */}

              <div className="flex items-center gap-3">

                <Mail size={20} />

                diabetesriskprediction@gmail.com

              </div>

            </div>

          </div>

        </div>

        <hr className="my-10 border-slate-700"/>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-400">
            © 2026 University of Central Punjab
          </p>

          <div className="flex items-center gap-2 text-cyan-400">

            <ShieldCheck size={18} />

            Privacy Preserving AI • Federated Learning

          </div>

        </div>

      </div>

    </footer>
  );
}

// import {
// Github,
// Globe,
// Mail,
// Heart,
// BookOpen
// } from "lucide-react";

// export default function Footer(){

// return(

// <footer className="bg-slate-900 text-white">

// <div className="max-w-7xl mx-auto px-8 py-20">

// <div className="grid lg:grid-cols-3 gap-12">

// <div>

// <h2 className="text-3xl font-black">

// Federated Diabetes AI

// </h2>

// <p className="mt-5 text-slate-300 leading-8">

// Privacy-Preserving Diabetes Risk Prediction using Federated Learning, Differential Privacy and Artificial Intelligence.

// </p>

// </div>

// <div>

// <h2 className="text-2xl font-bold">

// Quick Links

// </h2>

// <div className="mt-5 space-y-3">

// <a href="/" className="block hover:text-blue-400">Home</a>

// <a href="https://diabetes-risk-prediction-project-qx1z47eqh-fyp-g03.vercel.app/" 
// target="_blank" className="block hover:text-blue-400">

// Open Live System

// </a>

// </div>

// </div>

// <div>

// <h2 className="text-2xl font-bold">

// Project Resources

// </h2>

// <div className="mt-5 space-y-3">

// <div className="flex gap-3">

// <Globe size={20}/>

// <span>

// https://diabetes-risk-prediction-project-qx1z47eqh-fyp-g03.vercel.app/

// </span>

// </div>

// <div className="flex gap-3">

// <BookOpen size={20}/>

// <span>

// University of Central Punjab

// </span>

// </div>

// </div>

// </div>

// </div>

// <hr className="my-12 border-slate-700"/>

// <div className="flex flex-col lg:flex-row justify-between items-center gap-5">

// <p className="text-slate-400">

// © 2026 Federated Diabetes AI |

// Final Year Project

// </p>

// <p className="flex items-center gap-2 text-slate-400">

// Made with

// <Heart size={18} className="text-red-500"/>

// using React & Tailwind CSS

// </p>

// </div>

// </div>

// </footer>

// )

// }