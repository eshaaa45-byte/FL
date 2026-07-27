import {
  Database,
  Server,
  Cpu,
  Shield,
  Lock,
  Globe,
  Code2
} from "lucide-react";

const technologies = [

{
title:"React",
category:"Frontend",
color:"from-cyan-500 to-blue-600"
},

{
title:"Vite",
category:"Frontend",
color:"from-yellow-500 to-orange-500"
},

{
title:"Tailwind CSS",
category:"UI Framework",
color:"from-sky-400 to-cyan-500"
},

{
title:"Node.js",
category:"Backend",
color:"from-green-500 to-emerald-600"
},

{
title:"Express.js",
category:"REST API",
color:"from-gray-700 to-gray-900"
},

{
title:"MongoDB",
category:"Database",
color:"from-green-700 to-green-500"
},

{
title:"PyTorch",
category:"Deep Learning",
color:"from-red-500 to-orange-500"
},

{
title:"Flower",
category:"Federated Learning",
color:"from-indigo-500 to-purple-600"
},

{
title:"Differential Privacy",
category:"Privacy",
color:"from-purple-600 to-pink-600"
},

{
title:"AES Encryption",
category:"Security",
color:"from-blue-700 to-indigo-700"
},

{
title:"JWT Authentication",
category:"Authentication",
color:"from-cyan-700 to-indigo-700"
},

{
title:"REST API",
category:"Communication",
color:"from-slate-700 to-slate-900"
}

];

export default function TechStack(){

return(

<section
id="technology"
className="py-24 bg-gradient-to-b from-white to-slate-100"
>

<div className="max-w-7xl mx-auto px-8">

<div className="text-center mb-20">

<span className="text-blue-600 font-bold tracking-widest">

TECHNOLOGY STACK

</span>

<h2 className="text-5xl font-black text-slate-800 mt-4">

Built Using Modern

<span className="text-blue-600">

{" "}AI Technologies

</span>

</h2>

<p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-8">

Our Federated Diabetes Risk Prediction System combines
modern web development, Artificial Intelligence,
Federated Learning and privacy-preserving technologies
to create a secure healthcare platform.

</p>

</div>

<div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

{

technologies.map((tech,index)=>(

<div

key={index}

className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 duration-300"

>

<div

className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center mb-6`}

>

<Code2

className="text-white"

size={28}

/>

</div>

<h3 className="text-2xl font-bold text-slate-800">

{tech.title}

</h3>

<p className="mt-3 text-gray-500">

{tech.category}

</p>

</div>

))

}

</div>

<div className="grid md:grid-cols-3 gap-8 mt-20">

<Highlight
icon={<Database size={35}/>}
title="Database"
text="MongoDB stores secure patient information, prediction history and federated training records."
/>

<Highlight
icon={<Cpu size={35}/>}
title="Artificial Intelligence"
text="PyTorch MLP Neural Network performs diabetes risk prediction and federated model training."
/>

<Highlight
icon={<Shield size={35}/>}
title="Privacy Protection"
text="Differential Privacy and AES Encryption ensure secure collaborative learning."
/>

</div>

</div>

</section>

)

}

function Highlight({icon,title,text}){

return(

<div className="bg-white rounded-3xl shadow-xl p-8">

<div className="text-blue-600 mb-5">

{icon}

</div>

<h3 className="text-2xl font-bold mb-4">

{title}

</h3>

<p className="text-gray-600 leading-8">

{text}

</p>

</div>

)

}