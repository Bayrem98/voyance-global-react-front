import { useState } from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addUser } from "../../../action/Users/action";
import { FormattedMessage } from "react-intl";
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
import { addUser1 } from "../../../action/Users/actionQ";

interface UserAddPropsType {
  refresh: () => void;
}

const Inscription = (props: UserAddPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false); // form state for modal.
  const [isOpenedd, setIsOpenedd] = useState<boolean>(false);
  const [isOpeneddd, setIsOpeneddd] = useState<boolean>(false);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [roles, setRoles] = useState<string[]>([]);

  const submit = () => {
    const newUser = {
      username,
      password,
    };
    addUser(newUser, () => {
      props.refresh();
      setIsOpenedd(false);
      reset();
    });
  };

  const submit1 = () => {
    const newUser = {
      username,
      password,
      roles,
    };
    addUser1(newUser, () => {
      props.refresh();
      setIsOpened(false);
      reset();
    });
  };

  const reset = () => {
    setUsername("");
    setPassword("");
  };

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const eye = <FontAwesomeIcon icon={faEye} />;

  function showModal() {
    console.log(setIsOpenedd(true));
  }

  function showModal1() {
    console.log(setIsOpeneddd(true));
  }

  function closeModal() {
    console.log(setIsOpened(false));
  }

  return (
    <>
      <button
        className="button-insc"
        style={{
          color: "#b79e56",
          borderBlockColor: "#b79e56",
          font: "caption",
        }}
        onClick={() => setIsOpened(true)}
      >
        INSCRIPTION
      </button>

      <Modal
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <Form>
          <ModalBody toggle={() => setIsOpened(!isOpened)}>
            <p
              style={{
                color: "#b79e56",
                textAlign: "center",
                textDecoration: "underline",
                fontSize: 25,
              }}
            >
              INSCRIVEZ-VOUS
            </p>
            <span
              onClick={() => setIsOpened(false)}
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
            <br />
            <Button
              outline
              style={{
                float: "left",
                border: 0,
                borderRadius: 10,
                backgroundColor: "#217575",
                fontSize: 20,
                width: 150,
              }}
              onClick={() => {
                showModal();
                closeModal();
              }}
            >
              BIBLIOTHEQUE
            </Button>
            <span className="vertical-line"></span>
            <Button
              outline
              style={{
                float: "right",
                border: 0,
                borderRadius: 10,
                backgroundColor: "#217575",
                fontSize: 20,
                width: 150,
              }}
              onClick={() => {
                showModal1();
                closeModal();
              }}
            >
              QUIZ
            </Button>
          </ModalBody>
        </Form>
      </Modal>

      <Modal
        centered
        scrollable
        isOpen={isOpenedd}
        toggle={() => setIsOpenedd(!isOpenedd)}
      >
        <Form onSubmit={(e) => submit()}>
          <ModalBody toggle={() => setIsOpenedd(!isOpenedd)}>
            <p
              style={{
                color: "#217575",
                textAlign: "center",
                textDecoration: "underline",
                fontSize: 25,
              }}
            >
              INSCRIVEZ-VOUS A LA BIBLIOTHEQUE
            </p>
            <span
              onClick={() => setIsOpenedd(false)}
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
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                style={{
                  color: "#217575",
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
            </Button>{" "}
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

      <Modal
        centered
        scrollable
        isOpen={isOpeneddd}
        toggle={() => setIsOpeneddd(!isOpeneddd)}
      >
        <Form onSubmit={(e) => submit1()}>
          <ModalBody toggle={() => setIsOpeneddd(!isOpeneddd)}>
            <p
              style={{
                color: "#217575",
                textAlign: "center",
                textDecoration: "underline",
                fontSize: 25,
              }}
            >
              INSCRIVEZ-VOUS AU QUIZ
            </p>
            <span
              onClick={() => setIsOpeneddd(false)}
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
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                style={{
                  color: "#217575",
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
            </Button>{" "}
            <Button
              style={{
                backgroundColor: "lightgray",
                border: 0,
              }}
              onClick={() => setIsOpeneddd(false)}
            >
              <FormattedMessage id="button.cancel" />
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default Inscription;
