import Image from "next/image";

export const Navbar: React.FC = () => {
  return (
    <div className="navbar sticky top-0 z-10 bg-base-100">
      <div className="navbar-start">
        <a className="btn-ghost btn text-xl normal-case">
          <Image
            src="/logo.png"
            alt="Logo Favela Contest"
            width={64}
            height={64}
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Eventos</a>
          </li>
          <li>
            <a>Quem somos</a>
          </li>
          <li>
            <a>Galeria</a>
          </li>
          <li>
            <a>Como apoiar</a>
          </li>
          <li>
            <a>Contato</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};
