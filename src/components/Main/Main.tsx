import "./Main.css";



type MainProps = {
  varaside: string;
  vararticle: string;
  varmenu: string
};


export default function Main({varmenu,vararticle,varaside}:MainProps) { 
  return (
    <>


      <nav>
          <ul className="Migasdepan">
            <li><a href="/">/Home</a></li>
            <li><a href="/category">/Category</a></li>
          </ul>
        </nav>


  
      <div className="MainContent">
        

        

        <section className="menu"><p> {varmenu}</p></section>
        <section className="article">   <p> {vararticle} </p> </section>
        <section className="aside"><p>{varaside}</p> </section>
      </div>
  

      <div class="tarjeta">
          <figure>
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeconceptos.com%2Fciencias-naturales%2Finvalido&psig=AOvVaw0LM_uCn6Y18-kErCF2h-U9&ust=1758173921531000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMiWxbKK348DFQAAAAAdAAAAABAL            " alt="invalido" />
              <figcaption> Jhon es invalido</figcaption>

              <a href="/" class="button">Click on me</a>

          
          </figure>
      </div>




      <p>
        YO SOY EL MAIN DEBEN HACER: 4) Main: breadcrumbs y contenido principal,
        hacer los slide verticales a sus laterales, contenedor que encapsule el
        contenido principal (SidebarLeft, MainContent y SidebarRight)
      </p>
    </>
  );
}
