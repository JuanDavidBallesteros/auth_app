import consumer from "../consumer";
import { useEffect, useState } from "react";

export const useUsers = (id) => {
  const [users, setUsers] = useState();

  useEffect(() => {
    if (id) {
      setUsers(consumer.getUser(id));
    } else {
      setUsers(consumer.getUsers());
    }
  }, [id]);

  return users;
};
