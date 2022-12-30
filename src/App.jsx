import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { Grilla } from "./Grilla";

export const App = () => {
  const [categorias, setcategorias] = useState([]);

  function onAddCategoria(categoria) {
    setcategorias([categoria, ...categorias]);
  }

  return (
    <div>
      <AddCategory onAddCategoria={onAddCategoria} />
      <>
      {
           
            categorias.map((cat) => {
            return (
              <div key={cat} >
                <h1>{cat}</h1>
                <Grilla categoria={cat}></Grilla>
              </div>
              )
            })
      }  
      </>
    </div>
  );
};
