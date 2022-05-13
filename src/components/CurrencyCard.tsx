import IReactProps from '../interfaces/reactProps';

interface ICurrencyCardProps extends IReactProps {
  animate?: string;
}

export default function CurrencyCard({ children, animate }: ICurrencyCardProps) {
  return (
    <div
      className={`my-4 p-2 rounded flex flex-col justify-center items-center bg-sky-900 ${animate}`}
    >
      {children}
    </div>
  );
}
