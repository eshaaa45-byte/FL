import CountUp from "react-countup";
import {
  Hospital,
  Brain,
  ShieldCheck,
  Lock,
  Activity,
  Database,
  Cpu,
  GitBranch
} from "lucide-react";

const stats = [

{
icon:<Hospital size={35}/>,
number:3,
suffix:"+",
title:"Participating Hospitals",
desc:"Hospitals collaboratively train the AI model without sharing patient data."
},

{
icon:<Brain size={35}/>,
number:80,
suffix:"%",
title:"Global Model Accuracy",
desc:"Federated learning continuously improves global prediction performance."
},

{
icon:<GitBranch size={35}/>,
number:10,
suffix:"+",
title:"Federated Rounds",
desc:"Multiple collaborative training rounds improve the shared model."
},

{
icon:<Activity size={35}/>,
number:1000,
suffix:"+",
title:"Predictions Generated",
desc:"AI-assisted diabetes risk predictions performed securely."
},

{
icon:<Database size={35}/>,
number:25000,
suffix:"+",
title:"Training Records",
desc:"Historical seed records combined with validated live clinical data."
},

{
icon:<Cpu size={35}/>,
number:1,
suffix:"",
title:"PyTorch MLP",
desc:"Deep Neural Network trained using Flower Federated Learning."
},

{
icon:<ShieldCheck size={35}/>,
number:100,
suffix:"%",
title:"Privacy Preserved",
desc:"Hospitals never exchange raw patient information."
},

{
icon:<Lock size={35}/>,
number:256,
suffix:"-bit",
title:"AES Encryption",
desc:"Encrypted model parameter exchange between hospitals and server."
}

];

export default function Statistics(){

return(

<section
id="statistics"
className="py-24 bg-gradient-to-b from-slate-100 to-white"
>

<div className="max-w-7xl mx-auto px-8">

<div className="text-center mb-20">

<span className="text-blue-600 font-bold tracking-widest">

PROJECT ACHIEVEMENTS

</span>

<h2 className="text-5xl font-black text-slate-800 mt-4">

Research Highlights

</h2>

<p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-8">

Our Federated Diabetes Risk Prediction System combines Artificial Intelligence,
Federated Learning, Differential Privacy and Secure Encryption
to deliver privacy-preserving healthcare analytics.

</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

{

stats.map((item,index)=>(

<div

key={index}

className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 duration-300"

>

<div className="text-blue-600 mb-6">

{item.icon}

</div>

<h2 className="text-5xl font-black text-slate-800">

{/* <CountUp

end={item.number}

duration={2.5}

/> */}

{item.suffix}

</h2>

<h3 className="mt-4 text-xl font-bold">

{item.title}

</h3>

<p className="mt-4 text-gray-600 leading-7">

{item.desc}

</p>

</div>

))

}

</div>

</div>

</section>

)

}

