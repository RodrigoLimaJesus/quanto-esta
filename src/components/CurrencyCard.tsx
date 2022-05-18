import IReactProps from '../interfaces/reactProps';

interface ICurrencyCardProps extends IReactProps {
  animate?: string;
}

export default function CurrencyCard({ children, animate }: ICurrencyCardProps) {
  return (
    <div
      className={`mb-3 mx-3 p-2
        rounded
        flex flex-col justify-center items-center
        bg-sky-900
        ${animate}
        sm:w-96
        lg:w-[30rem]`}
    >
      {children}
    </div>
  );
}
