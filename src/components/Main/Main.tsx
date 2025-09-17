import "./Main.css";

type MainProps = {
  varaside: string;
  vararticle: string;
  varmenu: string;
};

export default function Main({ varmenu, vararticle, varaside }: MainProps) {
  return (
    <>
      {/* Migas de pan */}
      <nav>
        <ul className="Migasdepan">
          <li><a href="/">/Home</a></li>
          <li><a href="/category">/Category</a></li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <div className="MainContent">
        <section className="menu">
          <p>{varmenu}</p>
        </section>
        <section className="article">
          <p>{vararticle}</p>
        </section>
        <section className="aside">
          <p>{varaside}</p>
        </section>
      </div>

      {/* Tarjeta */}
      <div className="tarjeta">
        <figure>
          <img
            src="https://via.placeholder.com/300"
            alt="Imagen de ejemplo"
          />
          <figcaption>Ejemplo de tarjeta</figcaption>
          <a href="/" className="button">Click on me</a>
        </figure>
      </div>
    </>
  );
}
