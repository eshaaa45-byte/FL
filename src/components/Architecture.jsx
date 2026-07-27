import {
  Hospital,
  Lock,
  Brain,
  Server,
  ArrowRight
} from "lucide-react";

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <span className="text-cyan-400 font-bold tracking-widest">
            SYSTEM ARCHITECTURE
          </span>

          <h2 className="text-5xl font-black mt-4">
            Federated Learning Workflow
          </h2>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto leading-8">
            Each hospital trains its own AI model locally.
            Only encrypted model parameters are shared with
            the central aggregation server. Raw patient data
            never leaves the hospital.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-16">

          <HospitalCard title="Hospital A" />
          <HospitalCard title="Hospital B" />
          <HospitalCard title="Hospital C" />

        </div>

        <div className="flex justify-center mb-12">

          <ArrowRight
            size={70}
            className="text-cyan-400 animate-pulse rotate-90 lg:rotate-0"
          />

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          <StepCard
            icon={<Lock size={34} />}
            title="Encrypted Parameters"
            text="Each hospital encrypts its local model parameters using AES before transmission."
          />

          <StepCard
            icon={<Server size={34} />}
            title="Flower DP-FedAvg Server"
            text="Flower securely aggregates encrypted local model updates into one global model."
          />

          <StepCard
            icon={<Brain size={34} />}
            title="Global AI Model"
            text="The improved global model is redistributed back to every hospital."
          />

        </div>

      </div>
    </section>
  );
}

function HospitalCard({ title }) {
  return (
    <div className="bg-slate-800 rounded-3xl p-8 text-center border border-slate-700 hover:border-cyan-400 duration-300">

      <Hospital
        size={55}
        className="mx-auto text-cyan-400 mb-5"
      />

      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-slate-300 leading-7">
        Local hospital data remains inside the institution.
        PyTorch neural network training is performed locally
        using validated patient records.
      </p>

    </div>
  );
}

function StepCard({ icon, title, text }) {
  return (
    <div className="bg-gradient-to-br from-cyan-600 to-indigo-700 rounded-3xl p-8 shadow-xl">

      <div className="mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="leading-8 text-cyan-50">
        {text}
      </p>

    </div>
  );
}