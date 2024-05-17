import css from "./ImageCard.module.css";

export default function ImageCard({ items: { links, slug } }) {
  return (
    <div>
       
      <img className={css.card} src={links.html} alt={slug} />
    </div>
  );
}
