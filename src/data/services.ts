import { type ComponentType } from "react";
import cropHealth from "../assets/services/crop-health.png";
import weedDetection from "../assets/services/weed-detection.png";
import prescriptionMaps from "../assets/services/prescription-maps.png";
import aerialSpraying from "../assets/services/aerial-spraying.png";
import insuranceDocumentation from "../assets/services/insurance-documentation.png";
import {
  CameraIcon,
  BeakerIcon,
  BugAntIcon,
  CloudIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import { useMessage } from "../locales/LocaleHooks";

export interface Service {
  id: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

export const useServices = (): Service[] => {
  const serviceList = [
    {
      id: "a",
      icon: CameraIcon,
      title: useMessage("services.1.title"),
      description: useMessage("services.1.description"),
      imageSrc: cropHealth,
    },
    {
      id: "b",
      icon: BeakerIcon,
      title: useMessage("services.2.title"),
      description: useMessage("services.2.description"),
      imageSrc: weedDetection,
    },
    {
      id: "c",
      icon: BugAntIcon,
      title: useMessage("services.3.title"),
      description: useMessage("services.3.description"),
      imageSrc: prescriptionMaps,
    },
    {
      id: "d",
      icon: CloudIcon,
      title: useMessage("services.4.title"),
      description: useMessage("services.4.description"),
      imageSrc: aerialSpraying,
    },
    {
      id: "e",
      icon: ChartBarIcon,
      title: useMessage("services.5.title"),
      description: useMessage("services.5.description"),
      imageSrc: insuranceDocumentation,
    },
  ];

  return serviceList;
};
