import axios from "axios";
import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import { getImages } from "./img-api";
import SearchBar from "./SearchBar/SearchBar";

// import css from "./App.module.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState([]);
  // useEffect(() => {
  //   async function fetchImage() {
  //     setLoading(false);
  //     try {
  //       setLoading(true);
  //       const getjsImages = await getImages();
  //       setImages(getjsImages);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchImage();
  // }, []);
;
  const handleSearch = async (searchImg) => {
    console.log(searchImg);
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await getImages(searchImg);
      setImages(data);
    
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
    
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {images.length > 0 && <ImageGallery items={images} />}
    </div>
  );
}
