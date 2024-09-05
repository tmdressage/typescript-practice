import { useState } from "react";
import { UserProfileData } from "../types/userProfile";
import { UserData } from "../types/api/userData";

import axios from "axios";

// 全ユーザー一覧を取得するカスタムフック

export const useAllUsers = () => {
  const [userProfilesData, setUserProfilesData] = useState<
    Array<UserProfileData>
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
    setLoading(true);
    setError(false);

    axios
      .get<Array<UserData>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((userData) => ({
          id: userData.id,
          name: `${userData.name} (${userData.username})`,
          email: userData.email,
          address: `${userData.address.street}, ${userData.address.suite}, ${userData.address.city}, ${userData.address.zipcode}`,
        }));
        setUserProfilesData(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { getUsers, userProfilesData, loading, error };
};
