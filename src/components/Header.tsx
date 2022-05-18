import { AiFillSignal } from 'react-icons/ai';

export default function Header() {
  return (
    <header
      className="font-bold
        text-2xl
        py-3
        flex flex-row items-center justify-center
        md:text-3xl
        md:mb-3
        lg:text-4xl
        lg:mb-5"
    >
      <span className="text-2xl text-orange-400 mr-1">
        <AiFillSignal />
      </span>
      <h1>Quanto está</h1>
    </header>
  );
}
