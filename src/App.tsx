import axios from "axios";
import { useState } from "react";
import { Practice1 } from "./practices/Practice1";
import { Practice2 } from "./practices/Practice2";
import { Practice3 } from "./practices/Practice3";
import { Practice4 } from "./practices/Practice4";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { User } from "./types/user";
import { UserProfile } from "./UserProfile";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";
// import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  const user: User = {
    name: "ねこ",
    hobbies: ["寝る", "食べる"],
  };
  const userCard = {
    id: 1,
    name: "ねこ",
    email: "neko@cat.com",
    address: "Tokyo",
  };

  const { getUsers, userProfilesData, loading, error } = useAllUsers();
  const onClickFetchUser = () => getUsers();

  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
      <UserCard userCard={userCard} />
      <button onClick={onClickFetchUser}>ユーザーデータ取得</button>
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Now Loading...</p>
      ) : (
        userProfilesData.map((userData) => (
          <UserCard key={userData.id} userCard={userData} />
        ))
      )}
      <Practice1 />
      <Practice2 />
      <Practice3 />
      <Practice4 />
    </div>
  );
}
