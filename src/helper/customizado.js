import { useEffect, useState } from "react";
import { getGifs } from "./getGifts";

export const customizado = (categoria) => {
  
  const [imagenes, setImagenes] = useState([]);
  const [loading, setLoading] = useState(true);
  //   console.log(categoria);

  const getGifts = async () => {
    const newImages = await getGifs(categoria);
    setImagenes(newImages);
    setLoading(false)
  };

  useEffect(() => {
    getGifts();
  }, []);
  
  
    return {
        imagenes,
        loading
    };
};
