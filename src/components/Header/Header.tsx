import "./Header.css";

type MenuItem = { label: string; href: string };

interface HeaderProps {
  logo: string;
  menuItems: MenuItem[];
  userIcon: string;
}

export default function Header({ logo, menuItems, userIcon }: HeaderProps) {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar">
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="logo user">
        <img src={userIcon} alt="User" />
      </div>
    </div>
  );
}
