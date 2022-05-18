import { useId } from 'react';
import { AiFillHeart, AiFillHome, AiFillSetting } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const routes = [
    { id: useId(), linkTo: '/', name: 'Início', icon: <AiFillHome /> },
    { id: useId(), linkTo: '/favorites', name: 'Favoritos', icon: <AiFillHeart /> },
    { id: useId(), linkTo: '/settings', name: 'Configurações', icon: <AiFillSetting /> },
  ];

  return (
    <nav
      className="flex flex-row
      rounded
      mb-4
      overflow-x-auto
      mn:justify-center
      sm:bg-slate-700
      sm:flex-col
      sm:w-44 sm:h-[73vh]
      sm:justify-start
      sm:m-0"
    >
      {routes.map(({ id, linkTo, name, icon }) => (
        <NavLink
          key={id}
          to={linkTo}
          className={({ isActive }) => {
            const activeStyle = isActive ? 'text-orange-400' : 'text-gray-400';

            return `flex flex-row items-center
              text-xl
              mx-2
              ${activeStyle}
              
              sm:my-2`;
          }}
        >
          <span className="mr-1">{icon}</span> {name}
        </NavLink>
      ))}
    </nav>
  );
}
