// import {
//   UserRound,
//   Stethoscope,
//   ClipboardCheck,
//   Brain,
//   Lock,
//   Server,
//   RefreshCcw,
//   ArrowDown
// } from "lucide-react";

// const steps = [
//   {
//     icon: <UserRound size={34} />,
//     title: "Patient Assessment",
//     description:
//       "Patient laboratory values are entered into the secure hospital system."
//   },

//   {
//     icon: <Stethoscope size={34} />,
//     title: "AI Risk Prediction",
//     description:
//       "The PyTorch neural network predicts Low, Medium or High diabetes risk."
//   },

//   {
//     icon: <ClipboardCheck size={34} />,
//     title: "Doctor Validation",
//     description:
//       "Doctors review the prediction and save the approved clinical diagnosis."
//   },

//   {
//     icon: <Brain size={34} />,
//     title: "Local Hospital Training",
//     description:
//       "Validated records are used for local federated learning inside each hospital."
//   },

//   {
//     icon: <Lock size={34} />,
//     title: "Encrypted Parameters",
//     description:
//       "Only AES encrypted model parameters are transmitted to the central server."
//   },

//   {
//     icon: <Server size={34} />,
//     title: "Global Aggregation",
//     description:
//       "Flower DP-FedAvg securely combines local models into one improved global model."
//   },

//   {
//     icon: <RefreshCcw size={34} />,
//     title: "Model Distribution",
//     description:
//       "The updated global model is securely distributed back to every hospital."
//   }
// ];

// export default function Workflow() {
//   return (
//     <section
//       id="workflow"
//       className="py-24 bg-slate-900 text-white"
//     >
//       <div className="max-w-7xl mx-auto px-6">

//         <div className="text-center mb-20">

//           <span className="uppercase tracking-widest text-cyan-400 font-bold">
//             Workflow
//           </span>

//           <h2 className="text-5xl font-black mt-4">
//             Federated Learning Lifecycle
//           </h2>

//           <p className="mt-6 max-w-3xl mx-auto text-slate-300 leading-8">
//             Our system enables secure collaborative AI training without
//             sharing raw patient information between hospitals.
//           </p>

//         </div>

//         <div className="max-w-5xl mx-auto">

//           {steps.map((step, index) => (

//             <div key={index}>

//               <div className="flex items-start gap-8">

//                 <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shrink-0 shadow-xl">

//                   {step.icon}

//                 </div>

//                 <div className="flex-1 bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-cyan-500 duration-300">

//                   <div className="flex items-center gap-4 mb-3">

//                     <span className="text-cyan-400 text-xl font-bold">
//                       Step {index + 1}
//                     </span>

//                     <h3 className="text-2xl font-bold">
//                       {step.title}
//                     </h3>

//                   </div>

//                   <p className="text-slate-300 leading-8">
//                     {step.description}
//                   </p>

//                 </div>

//               </div>

//               {index !== steps.length - 1 && (

//                 <div className="flex justify-center my-6">

//                   <ArrowDown
//                     size={38}
//                     className="text-cyan-400 animate-bounce"
//                   />

//                 </div>

//               )}

//             </div>

//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

import {
Hospital,
Lock,
Brain,
Cloud,
BarChart3
} from "lucide-react";

const workflow=[

{
title:"Hospital A",
icon:<Hospital size={36}/>
},

{
title:"Hospital B",
icon:<Hospital size={36}/>
},

{
title:"Hospital C",
icon:<Hospital size={36}/>
},

{
title:"Encrypted Parameters",
icon:<Lock size={36}/>
},

{
title:"Federated Learning",
icon:<Brain size={36}/>
},

{
title:"Global Model",
icon:<Cloud size={36}/>
},

{
title:"Risk Prediction",
icon:<BarChart3 size={36}/>
}

];

export default function Workflow(){

return(

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-8">

<div className="text-center mb-20">

<h2 className="text-5xl font-black">

Federated Learning Workflow

</h2>

<p className="mt-5 text-lg text-gray-600">

Patient data never leaves hospitals. Only encrypted model updates are shared.

</p>

</div>

<div className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 gap-8">

{workflow.map((item,index)=>(

<div
key={index}
className="relative flex flex-col items-center"
>

<div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl">

{item.icon}

</div>

<h3 className="mt-5 font-bold text-center">

{item.title}

</h3>

{index!==workflow.length-1 && (

<div className="hidden lg:block absolute top-12 left-[90%] w-full h-1 bg-blue-300"></div>

)}

</div>

))}

</div>

</div>

</section>

)

}