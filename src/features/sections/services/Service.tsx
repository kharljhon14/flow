import { ServicesProps } from './ServicesContainer';

interface Props extends ServicesProps {}

export default function Service({ icon, children }: Props) {
  return (
    <div className="flex items-center justify-center flex-col space-y-6 py-12 w-52">
      <div className="bg-lime-600 rounded-full w-32 h-32 flex items-center justify-center text-white">
        {icon}
      </div>
      {children}
    </div>
  );
}
