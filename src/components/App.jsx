import axios from "axios";
import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
// import ImageGallery from "./ImageGallery/ImageGallery";
// import SearchBar from "./SearchBar/SearchBar";
// import { getArticles } from "../../articles-api";
// import css from "./App.module.css";

export default function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchImage() {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos?client_id=s0XrVkvZCxZybVrgAUlDfLQ7GhmjR-Qp5eV1OTeQ98w&query=dog"
      );
      console.log(response);
      setImages(response.data.total);
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
