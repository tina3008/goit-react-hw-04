import css from "./FriendList.module.css";
import FriendListItem from './FriendListItem'


export default function FriendList({friends}){

    return(        
        <ul className={css.frendlist}>		
            {friends.map((friend)=>{
                return<li key={friend.id}>
                <FriendListItem friend={friend} />
                    </li>
            })
            }	
        </ul>       
    );
}