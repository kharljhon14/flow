import { ReactNode } from 'react';
import {
  PiChalkboardTeacherLight,
  PiEyedropperSampleLight,
  PiEyedropperSampleThin,
  PiLightbulbFilamentLight,
  PiLightbulbFilamentThin,
  PiPlantLight,
} from 'react-icons/pi';
import { LiaPeopleCarrySolid } from 'react-icons/lia';
import Service from './Service';

export interface ServicesProps {
  icon: ReactNode;
  children?: ReactNode;
}

const SERVICES: ServicesProps[] = [
  {
    icon: <PiEyedropperSampleLight size={64} />,
    children: (
      <div>
        <p className=" line-clamp-2 text-center">
          One of a kind detailed all-in-one hydrosol instructions
        </p>
      </div>
    ),
  },
  {
    icon: <PiLightbulbFilamentLight size={64} />,
    children: (
      <div>
        <p className=" line-clamp-2 text-center">Free guided self learning platform</p>
      </div>
    ),
  },
  {
    icon: <PiPlantLight size={64} />,
    children: (
      <div>
        <p className=" line-clamp-2 text-center">
          Scientific research-based explanations of the benefits of herbs
        </p>
      </div>
    ),
  },
  {
    icon: <PiChalkboardTeacherLight size={64} />,
    children: (
      <div>
        <p className=" line-clamp-2 text-center">Exclusive in-depth content for members</p>
      </div>
    ),
  },
];

export default function ServicesContainer() {
  return (
    <div className=" flex items-center justify-evenly w-full">
      {SERVICES.map(({ icon, children }, idx) => (
        <Service
          key={idx}
          icon={icon}
        >
          {children}
        </Service>
      ))}
    </div>
  );
}
