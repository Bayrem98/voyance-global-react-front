import axios from "axios";
import User from "../../@Types/User";

export function getUsersss(callback: (data: User[]) => void) {
  axios
    .get("http://localhost:9000/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token2")}`,
      },
    })
    .then(({ data }) => {
      callback(data);
    })
    .catch((e) => {
      console.error(e);
    });
}

export function addUser1(user: User, callback: () => void) {
  axios
    .post("http://localhost:9000/user", user)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function editUsers1(user: User, callback: () => void) {
  axios
    .put(`http://localhost:9000/user/${user._id}`, user)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function deleteUsers1(user: User, callback: () => void) {
  axios
    .delete(`http://localhost:9000/user/${user._id}`)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}
