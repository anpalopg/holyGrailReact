import Header from "./Header";

export default function Modificador() {
  const logo =
    "https://img.freepik.com/vector-gratis/icono-logotipo-aplicacion-subprocesos-aislado-sobre-fondo-blanco_1017-45264.jpg?semt=ais_hybrid&w=740&q=80";
  const menuItems = [
    { label: "Inicio", href: "/inicio" },
    { label: "About US", href: "/about" },
    { label: "Contactanos", href: "/contactanos" },
  ];
  const userIcon =
    "https://images.icon-icons.com/2483/PNG/512/user_icon_149851.png";

  return <Header logo={logo} menuItems={menuItems} userIcon={userIcon} />;
}
