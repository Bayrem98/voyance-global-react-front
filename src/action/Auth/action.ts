import axios from "axios";

export function login(
  username: string,
  pass: string,
  callback: (data: any) => void,
  fallback: () => void
) {
  axios
    .post("http://localhost:8000/auth/login", {
      username: username,
      password: pass,
    })
    .then(({ data }) => {
      callback(data);
    })
    .catch((e) => {
      console.error(e);
      fallback();
    });
}

export function loginb(
  username: string,
  pass: string,
  callback: (data: any) => void,
  fallback: () => void
) {
  axios
    .post("http://localhost:5001/auth/login", {
      username: username,
      password: pass,
    })
    .then(({ data }) => {
      callback(data);
    })
    .catch((e) => {
      console.error(e);
      fallback();
    });
}

export function loginq(
  username: string,
  pass: string,
  callback: (data: any) => void,
  fallback: () => void
) {
  axios
    .post("http://localhost:9000/auth/login", {
      username: username,
      password: pass,
    })
    .then(({ data }) => {
      callback(data);
    })
    .catch((e) => {
      console.error(e);
      fallback();
    });
}

export function logout() {
  localStorage.removeItem("access_token");
  window.location.reload();
}

