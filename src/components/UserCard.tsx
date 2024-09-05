import { VFC } from "react";
import { UserProfileData } from "../types/userProfile";


type Props = {
  userCard: UserProfileData;
};

export const UserCard: VFC<Props> = (props) => {
    const { userCard } = props;

    const style = {
        border: "solid 1px #ccc",
        borderRadius: "8px",
        padding: "0 16px",
        margin: "8px",
    };


  return (
      <div style={style}>
      <dl>
        <dt>名前</dt>
        <dd>{userCard.name}</dd>
        <dt>メール</dt>
        <dd>{userCard.email}</dd>
        <dt>住所</dt>
        <dd>{userCard.address}</dd>
      </dl>
    </div>
  );
};
