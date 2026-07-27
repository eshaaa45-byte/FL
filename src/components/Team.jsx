// export default function Team() {
//   return (
//     <section className="py-24 bg-white">

//       <div className="max-w-6xl mx-auto px-6">

//         <div className="text-center mb-16">

//           <h2 className="text-4xl font-bold text-gray-800">
//             Project Information
//           </h2>

//           <p className="text-gray-600 mt-4">
//             Final Year Project Details
//           </p>

//         </div>

//         <div className="bg-slate-50 rounded-3xl shadow-xl p-10">

//           <div className="grid md:grid-cols-2 gap-8">

//             <Info title="Project Title">
//               Federated Learning Based Diabetes Risk Stratification Under Non-IID Hospital Data for Privacy Preserving Medical Diagnosis
//             </Info>

//             <Info title="University">
//               University of Central Punjab
//             </Info>

//             <Info title="Department">
//               Department of Computer Science
//             </Info>

//             <Info title="Degree">
//               BS Computer Science
//             </Info>

//             <Info title="Supervisor">
//               Tanveer Ahmed
//             </Info>

//             <Info title="Student Name">
//               Talha Naseer
//               Esha Zulfiqar 
//               Amna Noor
//             </Info>

//             <Info title="Registration Number">
//               S3F22UBSCS009
//               S3F22UBSCS017
//               S3F22UBSCS022
//             </Info>

//             <Info title="Academic Session">
//               2022 – 2026
//             </Info>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// function Info({ title, children }) {
//   return (
//     <div>
//       <h3 className="font-bold text-blue-600 mb-2">
//         {title}
//       </h3>

//       <p className="text-gray-700 leading-7">
//         {children}
//       </p>
//     </div>
//   );
// }

import {
User,
GraduationCap,
BookOpen,
Globe
} from "lucide-react";

export default function Team() {

return (

<section className="py-24 bg-slate-100">

<div className="max-w-7xl mx-auto px-8">

<div className="text-center mb-16">

<h2 className="text-5xl font-black">

Project Information

</h2>

<p className="mt-5 text-lg text-gray-600">

Academic details of the Final Year Project.

</p>

</div>

<div className="grid lg:grid-cols-2 gap-10">

{/* Student */}

<div className="bg-white rounded-3xl shadow-lg p-10">

<div className="flex items-center gap-4 mb-8">

<div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white">

<User size={34}/>

</div>

<div>

<h2 className="text-2xl font-black">

Student Information

</h2>

<p className="text-gray-500">

Developer

</p>

</div>

</div>

<div className="space-y-5">

<Info label="Name" value="Talha Naseer"/>
<Info label="Registration No" value="S3F22UBSCS009"/>
<Info label="Name" value="Esha Zulfiqar"/>
<Info label="Registration No" value="S3F22UBSCS017"/>
<Info label="Name" value="Amna Noor"/>
<Info label="Registration No" value="S3F22UBSCS022"/>

<Info label="Program" value="BS Computer Science"/>

<Info label="Department" value="Faculty of Information Technology"/>

</div>

</div>

{/* University */}

<div className="bg-white rounded-3xl shadow-lg p-10">

<div className="flex items-center gap-4 mb-8">

<div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white">

<GraduationCap size={34}/>

</div>

<div>

<h2 className="text-2xl font-black">

University

</h2>

<p className="text-gray-500">

Academic Details

</p>

</div>

</div>

<div className="space-y-5">

<Info

label="University"

value="University of Central Punjab"

/>

<Info

label="Supervisor"

value="Tanveer Ahmed"

/>

<Info

label="Project"

value="Federated Learning Based Diabetes Risk Stratification under Non-IID Hospital Data for Privacy Preserving Medical Diagnosis"

/>

</div>

</div>

</div>

</div>

</section>

)

}

function Info({label,value}){

return(

<div>

<p className="text-sm text-gray-500">

{label}

</p>

<h3 className="font-bold text-lg">

{value}

</h3>

</div>

)

}