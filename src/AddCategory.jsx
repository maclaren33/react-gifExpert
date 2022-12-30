import { useState } from "react"

export const AddCategory = ({onAddCategoria}) => {
 const [categoria, setCategoria] = useState("")
  
  function agregaCategoria(e){
    e.preventDefault();
    onAddCategoria(categoria);
    setCategoria("");
  }

  function onChangeText(e)
  {
    setCategoria(e.target.value);
  }

  return (
    <>
    <h1>Agregar categoria</h1>
    <form onSubmit={agregaCategoria}>
        <input 
            type="text"
            onChange={onChangeText}
            value={categoria}
            />
    </form>
    </>
  )
}
