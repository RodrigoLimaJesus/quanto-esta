import { AiFillSignal } from 'react-icons/ai';

export default function Header() {
  return (
    <header className="font-bold text-xl p-3">
      <div className="flex flex-row items-center justify-center">
        <span className="text-2xl text-orange-400 mr-1">
          <AiFillSignal />
        </span>
        <h1>Quanto está</h1>
      </div>
    </header>
  );
}
