import "./Main.css";



type MainProps = {
  varaside: string;
  vararticle: string;
  varmenu: string
};


export default function Main({varmenu,vararticle,varaside}:MainProps) { 
  return (
    <>
      <h2>Andrea</h2>
    
      <div className="MainContent">
        <section className="menu"><p> {varmenu}</p></section>
        <section className="article">   <p> {vararticle} </p> </section>
        <section className="aside"><p>{varaside}</p> </section>
      </div>
  
      <p>
        YO SOY EL MAIN DEBEN HACER: 4) Main: breadcrumbs y contenido principal,
        hacer los slide verticales a sus laterales, contenedor que encapsule el
        contenido principal (SidebarLeft, MainContent y SidebarRight)
      </p>
    </>
  );
}
