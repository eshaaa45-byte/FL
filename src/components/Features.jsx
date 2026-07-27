import {
  Shield,
  Brain,
  Lock,
  Hospital,
  Database,
  Activity,
  BarChart3,
  Globe,
  History,
  Network,
  LineChart,
  Cpu
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Federated Learning",
    description:
      "Hospitals collaboratively train AI models without sharing raw patient data."
  },
  {
    icon: Shield,
    title: "Differential Privacy",
    description:
      "Gaussian noise protects local model updates before global aggregation."
  },
  {
    icon: Lock,
    title: "AES Encryption",
    description:
      "Encrypted model parameters are securely exchanged between hospitals and server."
  },
  {
    icon: Hospital,
    title: "Multi-Hospital Collaboration",
    description:
      "Supports multiple hospitals participating in collaborative model training."
  },
  {
    icon: Activity,
    title: "AI Diabetes Prediction",
    description:
      "Predicts Low, Medium and High diabetes risk using laboratory biomarkers."
  },
  {
    icon: Database,
    title: "Privacy Preservation",
    description:
      "Patient records never leave the originating hospital."
  },
  {
    icon: Globe,
    title: "Global Model Aggregation",
    description:
      "Flower DP-FedAvg aggregates encrypted local models into one global model."
  },
  {
    icon: Cpu,
    title: "Local Model Training",
    description:
      "Each hospital trains its own PyTorch neural network independently."
  },
  {
    icon: BarChart3,
    title: "Hospital Analytics",
    description:
      "Interactive dashboards visualize predictions, trends and performance."
  },
  {
    icon: LineChart,
    title: "Population Health",
    description:
      "Analyze diabetes distribution across hospitals in real time."
  },
  {
    icon: History,
    title: "Prediction History",
    description:
      "Complete revision history enables clinicians to monitor patient progress."
  },
  {
    icon: Network,
    title: "Research Dashboard",
    description:
      "Researchers monitor federated rounds, global accuracy and privacy metrics."
  }
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <span className="text-blue-600 font-bold tracking-widest">
            SYSTEM FEATURES
          </span>

          <h2 className="text-5xl font-black text-slate-800 mt-4">
            Everything Needed For
            <span className="text-blue-600">
              {" "}Privacy-Preserving Healthcare
            </span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg leading-8">
            Our Federated Diabetes Risk Prediction System integrates
            Artificial Intelligence, Federated Learning and Privacy
            technologies into one secure healthcare platform.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 hover:-translate-y-2 hover:shadow-2xl duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center mb-6">

                  <Icon
                    size={30}
                    className="text-white"
                  />

                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-800">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {feature.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}