import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h4 className="footer-title">Creado por grupo #</h4>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Proyecto educativo. Todos los derechos reservados.</p>
        <p>Dirección, Bogotá, Colombia</p>
      </div>
    </footer>
  );
}
