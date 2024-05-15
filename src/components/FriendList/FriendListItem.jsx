
import clsx from "clsx";

import css from "./FriendListItem.module.css";

export default function FriendListItem({
    friend:{avatar, name, isOnline}
  }) {
    return (
        <div className={css.friendItem}>   
            <img className={css.img} src={avatar} alt="Friend's avatar" width="48" />          
            <p className={css.friendName}>{name}</p>
            <p className={isOnline ? css.online :css.ofline}>
        {isOnline ? "Online" : "Offline"}
      </p>
        </div>
    );
  }