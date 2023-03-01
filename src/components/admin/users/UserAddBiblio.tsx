import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
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
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { addUser } from "../../../action/Users/action";

interface UserAddPropsType {
  refresh: () => void;
}

const UserAddBiblio = (props: UserAddPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false); // form state for modal.

  // form states
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submit = () => {
    const newUser = {
      username,
      password,
    };
    addUser(newUser, () => {
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
        <Form onSubmit={(e) => submit()}>
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
            </Button>{" "}
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
    </>
  );
};

export default UserAddBiblio;
