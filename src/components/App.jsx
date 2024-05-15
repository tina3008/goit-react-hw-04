import Profile from "./profile/Profile";
import userData from "./userData.json";

import friends from "./FriendList/friends.json";
import FriendList from "./FriendList/FriendList";

import transactions from './transactions/transactions.json';
import TransactionHistory from './transactions/TransactionHistory'

import clsx from "clsx";


  
export default function App (){
    return (
      <>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </>
    );
  };