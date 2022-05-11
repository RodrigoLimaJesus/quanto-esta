import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscGraph } from 'react-icons/vsc';

export default function Header() {
  const [isMenuVisible, setMenuVisible] = useState<boolean>(false);

  // function handleClick(e: React.MouseEvent<HTMLButtonElement>) {}

  return (
    <header className="font-bold text-xl flex justify-between p-3">
      <button
        className="text-2xl transition-opacity duration-500 ease-out opacity-100"
        type="button"
        onClick={() => setMenuVisible((prevState) => !prevState)}
      >
        {isMenuVisible ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </button>

      <div className="flex flex-row items-center">
        <span className="text-2xl text-orange-400">
          <VscGraph />
        </span>
        <h1>Quanto está</h1>
      </div>

      <div />
    </header>
  );
}
