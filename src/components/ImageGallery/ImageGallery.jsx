import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'

export default function ImageGallery({ items }) {
  return (
    <ul className={css.imgList}>
      {items.map(({ item }) => (
        <li key={item.id}>
          <ImageCard card={item} />
        </li>
      ))}
    </ul>
  );
}
