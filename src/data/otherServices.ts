import { type ComponentType } from "react";
import {
  CameraIcon,
  MapIcon,
  CubeIcon,
  SunIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import { useMessage } from "../locales/LocaleHooks";

import thermalImaging from "../assets/thermal-imaging.png";
import mapping2d from "../assets/2d-mapping.png";
import photogrammetry3d from "../assets/3d-photogrammetry.png";
import photovoltaics from "../assets/photovoltaics.png";
import liveInspections from "../assets/live-inspections.png";

export interface OtherService {
  id: string;
  icon: ComponentType<{ className?: string; fontSize?: "inherit" }>;
  title: string;
  description: string;
  imageSrc: string;
}

export const useOtherServices = (): OtherService[] => {
  const serviceList = [
    {
      id: "thermal",
      icon: CameraIcon,
      title: useMessage("otherServices.1.title"),
      description: useMessage("otherServices.1.description"),
      imageSrc: thermalImaging,
    },
    {
      id: "2d-mapping",
      icon: MapIcon,
      title: useMessage("otherServices.2.title"),
      description: useMessage("otherServices.2.description"),
      imageSrc: mapping2d,
    },
    {
      id: "3d-modeling",
      icon: CubeIcon,
      title: useMessage("otherServices.3.title"),
      description: useMessage("otherServices.3.description"),
      imageSrc: photogrammetry3d,
    },
    {
      id: "photovoltaic",
      icon: SunIcon,
      title: useMessage("otherServices.4.title"),
      description: useMessage("otherServices.4.description"),
      imageSrc: photovoltaics,
    },
    {
      id: "live-inspections",
      icon: EyeIcon,
      title: useMessage("otherServices.5.title"),
      description: useMessage("otherServices.5.description"),
      imageSrc: liveInspections,
    },
  ];

  return serviceList;
};
