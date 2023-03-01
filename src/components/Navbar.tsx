import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import User from "../@Types/User";
import { getUsers } from "../action/Users/action";
import { getUserss } from "../action/Users/actionA";
import { getUsersss } from "../action/Users/actionQ";
import Inscription from "./admin/users/Inscription";

interface NavbardInterfaceProps {
  lang: Function;
}

export default function Navbar(props: NavbardInterfaceProps) {
  const { lang } = props;

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers(setUsers); // aka setUsers(data)
  }, []);

  useEffect(() => {
    getUserss(setUsers); // aka setUsers(data)
  }, []);

  useEffect(() => {
    getUsersss(setUsers); // aka setUsers(data)
  }, []);

  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isOpenedd, setIsOpenedd] = useState<boolean>(false);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordShown, setPasswordShown] = useState(false);

  const changeUsername = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const changePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const toggleModal = (e: any) => {
    setOpen(!open);
    e.preventDefault();
  };

  const handelClose = () => setOpen(false);

  const handelClose1 = () => setIsOpened(false);

  const handelClose2 = () => setIsOpenedd(false);

  const handleLogin = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/auth/login", { username, password })
      .then(({ data }) => {
        localStorage.setItem("access_token", data.access_token);
        handelClose();
        window.location.reload();
        console.log(data);
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });
  }; // function for login admin.

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
    window.location.reload();
  }; // function for logout admin.

  const handleLoginb = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/auth/login", { username, password })
      .then(({ data }) => {
        localStorage.setItem("access_token1", data.access_token);
        handelClose();
        navigateto();
        console.log(data);
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });
  };

  const navigateto = () => {
    window.location.replace("http://localhost:3001/");
  };

  const eye = <FontAwesomeIcon icon={faEye} />;

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleLoginq = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/auth/login", { username, password })
      .then(({ data }) => {
        localStorage.setItem("access_token2", data.access_token);
        handelClose();
        navigatetoo();
        console.log(data);
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });
  };

  const navigatetoo = () => {
    window.location.replace("http://localhost:3002/");
  };

  return (
    <div>
      <nav
        className="navbar sticky-top navbar-light"
        style={{ backgroundColor: "#217575" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ color: "white" }}>
            VOYANCE-GLOBAL
            <img src="/home-img/logo-title.png" alt=".." />
          </a>
          <div>
            <Inscription refresh={() => getUsers(setUsers)} />

            {localStorage.getItem("access_token") ? (
              <span className="button-con">
                <Link
                  to=""
                  style={{
                    textDecoration: "none",
                    color: "white",
                    font: "caption",
                  }}
                  onClick={logout}
                >
                  <img
                    src="/home-img/logout-img.png"
                    alt=".."
                    width={40}
                    height={40}
                  />
                </Link>
              </span>
            ) : (
              <span className="button-con">
                <Link
                  to=""
                  style={{
                    textDecoration: "none",
                    color: "white",
                    font: "caption",
                  }}
                  onClick={toggleModal}
                >
                  ADMIN-LOG
                </Link>
              </span>
            )}
          </div>
        </div>
      </nav>

      {open ? (
        <Modal centered scrollable isOpen={open} toggle={() => setOpen(false)}>
          <Form onSubmit={(e) => handleLogin(e)}>
            <ModalBody toggle={() => setOpen(!open)}>
              <p
                style={{
                  color: "#b79e56",
                  textAlign: "center",
                  textDecoration: "underline",
                  fontSize: 25,
                }}
              >
                CONNECTER-VOUS
              </p>
              <span
                onClick={handelClose}
                style={{
                  position: "absolute",
                  right: 10,
                  top: 2,
                  cursor: "pointer",
                  color: "gray",
                  fontSize: 20,
                }}
              >
                X
              </span>
              <br />
              <FormGroup floating>
                <Input
                  value={username}
                  id="username"
                  name="username"
                  type="text"
                  onChange={changeUsername}
                />
                <Label for="username">
                  <FormattedMessage id="user.username" />
                </Label>
              </FormGroup>
              <FormGroup floating>
                <Input
                  value={password}
                  id="password"
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  onChange={changePassword}
                />
                <i
                  style={{
                    color: "#b79e56",
                    position: "absolute",
                    top: 18,
                    right: 16,
                    height: 20,
                    width: 20,
                    cursor: "pointer",
                  }}
                  onClick={togglePasswordVisiblity}
                >
                  {eye}
                </i>
                <Label for="password">
                  <FormattedMessage id="user.password" />
                </Label>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                style={{
                  backgroundColor: "#b79e56",
                  border: 0,
                }}
                type="submit"
                disabled={!username || !password}
              >
                <FormattedMessage id="button.confirm" />
              </Button>
              <Button
                style={{
                  backgroundColor: "lightgray",
                  border: 0,
                }}
                onClick={handelClose}
              >
                <FormattedMessage id="button.cancel" />
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      ) : (
        <></>
      )}

      {isOpened ? (
        <Modal
          centered
          scrollable
          isOpen={isOpened}
          toggle={() => setIsOpened(!isOpened)}
        >
          <Form onSubmit={(e) => handleLoginb(e)}>
            <ModalBody toggle={() => setIsOpened(!isOpened)}>
              <p
                style={{
                  color: "#b79e56",
                  textAlign: "center",
                  textDecoration: "underline",
                  fontSize: 25,
                }}
              >
                CONNECTER-VOUS A LA BIBLIOTHEQUE
              </p>
              <span
                onClick={handelClose1}
                style={{
                  position: "absolute",
                  right: 10,
                  top: 2,
                  cursor: "pointer",
                  color: "gray",
                  fontSize: 20,
                }}
              >
                X
              </span>
              <br />
              <FormGroup floating>
                <Input
                  value={username}
                  id="username"
                  name="username"
                  type="text"
                  onChange={changeUsername}
                />
                <Label for="username">
                  <FormattedMessage id="user.username" />
                </Label>
              </FormGroup>
              <FormGroup floating>
                <Input
                  value={password}
                  id="password"
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  onChange={changePassword}
                />
                <i
                  style={{
                    color: "#b79e56",
                    position: "absolute",
                    top: 18,
                    right: 16,
                    height: 20,
                    width: 20,
                    cursor: "pointer",
                  }}
                  onClick={togglePasswordVisiblity}
                >
                  {eye}
                </i>
                <Label for="password">
                  <FormattedMessage id="user.password" />
                </Label>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                style={{
                  backgroundColor: "#b79e56",
                  border: 0,
                }}
                type="submit"
                disabled={!username || !password}
              >
                <FormattedMessage id="button.confirm" />
              </Button>
              <Button
                style={{
                  backgroundColor: "lightgray",
                  border: 0,
                }}
                onClick={() => setIsOpened(false)}
              >
                <FormattedMessage id="button.cancel" />
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      ) : (
        <></>
      )}

      {isOpenedd ? (
        <Modal
          centered
          scrollable
          isOpen={isOpenedd}
          toggle={() => setIsOpenedd(!isOpenedd)}
        >
          <Form onSubmit={(e) => handleLoginq(e)}>
            <ModalBody toggle={() => setIsOpenedd(!isOpenedd)}>
              <p
                style={{
                  color: "#b79e56",
                  textAlign: "center",
                  textDecoration: "underline",
                  fontSize: 25,
                }}
              >
                CONNECTER-VOUS AU QUIZ
              </p>
              <span
                onClick={handelClose2}
                style={{
                  position: "absolute",
                  right: 10,
                  top: 2,
                  cursor: "pointer",
                  color: "gray",
                  fontSize: 20,
                }}
              >
                X
              </span>
              <br />
              <FormGroup floating>
                <Input
                  value={username}
                  id="username"
                  name="username"
                  type="text"
                  onChange={changeUsername}
                />
                <Label for="username">
                  <FormattedMessage id="user.username" />
                </Label>
              </FormGroup>
              <FormGroup floating>
                <Input
                  value={password}
                  id="password"
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  onChange={changePassword}
                />
                <i
                  style={{
                    color: "#b79e56",
                    position: "absolute",
                    top: 18,
                    right: 16,
                    height: 20,
                    width: 20,
                    cursor: "pointer",
                  }}
                  onClick={togglePasswordVisiblity}
                >
                  {eye}
                </i>
                <Label for="password">
                  <FormattedMessage id="user.password" />
                </Label>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                style={{
                  backgroundColor: "#b79e56",
                  border: 0,
                }}
                type="submit"
                disabled={!username || !password}
              >
                <FormattedMessage id="button.confirm" />
              </Button>
              <Button
                style={{
                  backgroundColor: "lightgray",
                  border: 0,
                }}
                onClick={() => setIsOpenedd(false)}
              >
                <FormattedMessage id="button.cancel" />
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      ) : (
        <></>
      )}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/actualite"
                >
                  ACTUALITE
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ cursor: "pointer" }}
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => setIsOpened(true)}
                >
                  BIBLIOTHEQUE
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ cursor: "pointer" }}
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => setIsOpenedd(true)}
                >
                  QUIZ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/formation"
                >
                  FORMATION
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="http://www.tunis0.telemaque.fr/"
                >
                  WIKI-COSMOSPEACE
                </a>
              </li>
              {localStorage.getItem("access_token") ? (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/admin1"
                    >
                      ADMIN
                    </a>
                  </li>
                </>
              ) : (
                <> </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
