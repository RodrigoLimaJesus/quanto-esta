import { VscGraph } from 'react-icons/vsc';

export default function Header() {
  return (
    <header className="font-bold text-xl p-3">
      <div className="flex flex-row items-center justify-center">
        <span className="text-2xl text-orange-400">
          <VscGraph />
        </span>
        <h1>Quanto está</h1>
      </div>
    </header>
  );
}
