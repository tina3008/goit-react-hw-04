import css from "./ImageCard.module.css";

export default function ImageCard({ imgLink, imgSlug }) {
console.log("card");
  return (
    <div>
  
      <img className={css.card} src={imgLink} alt={imgSlug} />
    </div>
  );
}
