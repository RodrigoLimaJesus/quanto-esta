import { useId } from 'react';
import { AiFillHeart, AiFillHome, AiFillTool } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const routes = [
    { id: useId(), linkTo: '/', name: 'Início', icon: <AiFillHome /> },
    { id: useId(), linkTo: '/favorites', name: 'Favoritos', icon: <AiFillHeart /> },
    { id: useId(), linkTo: '/settings', name: 'Configurações', icon: <AiFillTool /> },
  ];

  return (
    <nav className="flex flex-row m-3 py-2 overflow-x-auto">
      {routes.map(({ id, linkTo, name, icon }) => (
        <NavLink
          key={id}
          to={linkTo}
          className={({ isActive }) => {
            const activeStyle = isActive ? 'text-orange-400' : 'text-gray-400';

            return `flex flex-row text-xl items-center mx-2 ${activeStyle}`;
          }}
        >
          <span className="mr-1">{icon}</span> {name}
        </NavLink>
      ))}
    </nav>
  );
}
