
import { Carta } from "./Carta";
import { customizado } from "./helper/customizado";

export const Grilla = ({ categoria }) => {
  
  const {imagenes, loading} = customizado(categoria);

  return (
    <div className="card-grid">
      {loading && (<h2>Cargando</h2>)}
      {imagenes.map((img) => (
        <div className="card" key={img.id}>
          <Carta  url={img.url} title ={img.title}></Carta>
        </div>
      ))}
    </div>
  );
};
