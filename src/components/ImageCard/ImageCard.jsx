import css from "./ImageCard.module.css";

export default function ImageCard({ items: { links, slug } }) {
console.log(slug);
  return (
    <div>
   
      <img className={css.card} src={links.html} alt={slug} />
    </div>
  );
}
