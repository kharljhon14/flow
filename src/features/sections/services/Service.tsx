import { ServicesProps } from './ServicesContainer';

interface Props extends ServicesProps {}

export default function Service({ icon, children }: Props) {
  return (
    <div className="flex items-center justify-center flex-col space-y-6 lg:py-12 w-52 p-6">
      <div className="bg-lime-600 rounded-full lg:w-32 lg:h-32 w-24 h-24 text-5xl flex items-center justify-center text-white">
        {icon}
      </div>
      {children}
    </div>
  );
}
