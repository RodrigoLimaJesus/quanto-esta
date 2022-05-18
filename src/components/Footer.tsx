import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function Footer() {
  const myLinks = [
    { icon: <AiFillGithub />, link: 'https://github.com/RodrigoLimaJesus' },
    { icon: <AiFillLinkedin />, link: 'https://www.linkedin.com/in/rodrigo-lima-jesus/' },
  ];
  return (
    <footer
      className="flex flex-row justify-center items-center
      my-4
      text-xl text-white
      lg:text-2xl"
    >
      <span>&copy; 2022 - Rodrigo Lima</span>
      {myLinks.map(({ icon, link }) => (
        <a
          key={link}
          href={link}
          rel="noreferrer"
          target="_blank"
          className="mx-1 duration-300 hover:text-cyan-300 sm:text-2xl lg:text-3xl"
        >
          {icon}
        </a>
      ))}
    </footer>
  );
}
