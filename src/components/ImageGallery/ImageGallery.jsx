import ImageCard from "../ImageCard/ImageCard";
// import css from './ImageGallery.css'

export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.map(({ item }) => (
        <li key={item.id}>
          <ImageCard card={item} />
        </li>
      ))}
    </ul>
  );
}
