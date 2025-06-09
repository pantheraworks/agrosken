import service1 from "../assets/service_1.png";

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

export const services: Service[] = [
  {
    id: "a",
    icon: "A",
    title: "Smart Crop Monitoring",
    description:
      "Monitor your crops in real-time with advanced IoT sensors and AI-powered analytics. Track soil moisture, temperature, and growth patterns to optimize yields and reduce resource waste.",
    imageSrc: service1,
    imageAlt: "Smart Crop Monitoring",
  },
  {
    id: "b",
    icon: "B",
    title: "Precision Irrigation",
    description:
      "Automated irrigation systems that deliver the right amount of water at the right time. Save up to 40% on water usage while maximizing crop health and productivity.",
    imageSrc: service1,
    imageAlt: "Precision Irrigation",
  },
  {
    id: "c",
    icon: "C",
    title: "Pest Detection AI",
    description:
      "Early detection of pests and diseases using computer vision and machine learning. Get alerts before problems spread and protect your harvest with targeted interventions.",
    imageSrc: service1,
    imageAlt: "Pest Detection AI",
  },
  {
    id: "d",
    icon: "D",
    title: "Weather Analytics",
    description:
      "Hyper-local weather forecasting and climate analytics tailored for agriculture. Make informed decisions about planting, harvesting, and protection against weather events.",
    imageSrc: service1,
    imageAlt: "Weather Analytics",
  },
  {
    id: "e",
    icon: "E",
    title: "Yield Optimization",
    description:
      "Data-driven insights to maximize your crop yields. Combine soil analysis, weather data, and growth patterns to optimize planting strategies and resource allocation.",
    imageSrc: service1,
    imageAlt: "Yield Optimization",
  },
];
