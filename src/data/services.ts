import { type ComponentType } from "react";
import cropHealth from "../assets/services/crop-health.jpg";
import weedDetection from "../assets/services/weed-detection.jpg";
import prescriptionMaps from "../assets/services/prescription-maps.jpg";
import aerialSpraying from "../assets/services/aerial-spraying.jpg";
import insuranceDocumentation from "../assets/services/insurance-documentation.jpg";
import {

  CloudIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import { useMessage } from "../locales/LocaleHooks";

export interface Service {
  id: string;
  icon: ComponentType<{ className?: string, fontSize: "inherit" }>;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

export const useServices = (): Service[] => {
  const serviceList = [
    {
      id: "a",
      icon: HealthAndSafetyOutlinedIcon,
      title: useMessage("services.1.title"),
      description: useMessage("services.1.description"),
      imageSrc: cropHealth,
    },
    {
      id: "b",
      icon: GrassOutlinedIcon,
      title: useMessage("services.2.title"),
      description: useMessage("services.2.description"),
      imageSrc: weedDetection,
    },
    {
      id: "c",
      icon: MapOutlinedIcon,
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
      icon: DocumentTextIcon,
      title: useMessage("services.5.title"),
      description: useMessage("services.5.description"),
      imageSrc: insuranceDocumentation,
    },
  ];

  return serviceList;
};
