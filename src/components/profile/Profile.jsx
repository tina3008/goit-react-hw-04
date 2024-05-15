import css from "./profile.module.css"

export default function Profile({name, tag, location,  image, stats:{followers, views, likes}}){

    return(
<div className={css.profil}>
  <div className={css.userInfo}>
    <img className={css.img}
    src={image}
      alt="User avatar"
      width="100"
    />
    <p className={css.myName}>{name}</p>
    <p className={css.nameTxt}>@{tag}</p>
    <p className={css.nameTxt}>{location}</p>
  </div>

  <ul className={css.list}>
  <li className={css.item}>
      <span>Followers</span>
      <span>{followers}</span>
    </li>
    <li className={css.item}>
      <span>Views</span>
      <span>{views}</span>
    </li>
    <li className={css.item}>
      <span>Likes</span>
      <span>{likes}</span>
    </li>
  </ul>
</div>
    )
}