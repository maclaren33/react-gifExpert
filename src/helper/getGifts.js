export const getGifs= async(category)=>{
    const api_key='142wFrAcY1301mQn3b9MdU8dBxkvKFcp';  
    const url=`https://api.giphy.com/v1/gifs/search?api_key=142wFrAcY1301mQn3b9MdU8dBxkvKFcp&q=${category}&limit=5`
  
      const resp = await fetch(url);
      const {data=[]} = await resp.json();
      const gift= data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
  
      }));
      return gift;
  
  }
  