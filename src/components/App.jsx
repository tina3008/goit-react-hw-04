import axios from "axios";
import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import {getImages} from "./img-api"

// import SearchBar from "./SearchBar/SearchBar";

// import css from "./App.module.css";

export default function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchImage() {    

      const getjsImages = await getImages();
      console.log(getjsImages);
      setImages(getjsImages)         
    }
  
    fetchImage();
  }, []);

 
  return (
    <div>
      <h1>gallery</h1>    
      {images.length > 0 && <ImageGallery items={images} />}
    </div>
  );
}
