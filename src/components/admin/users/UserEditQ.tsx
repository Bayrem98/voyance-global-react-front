import { faPen } from "@fortawesome/free-solid-svg-icons";
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
import User1 from "../../../@Types/User1";
import { editUsers1 } from "../../../action/Users/actionQ";

interface UserEditPropsType {
  user: User1;
  refresh: () => void;
}

const UserEdit = ({ user, refresh }: UserEditPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // form states
  const [username, setUsername] = useState<string>(user.username);
  const [password, setPassword] = useState<string>(user.password);
  const [roles, setRoles] = useState<string[]>([]);

  const handleCheckbox = (role: string) => {
    setRoles(
      roles.includes(role) ? roles.filter((e) => e !== role) : [...roles, role]
    );
  };

  const submit = () => {
    const newUser = {
      _id: user._id,
      username,
      password,
      roles,
    };
    editUsers1(newUser, () => {
      refresh();
      setIsOpened(false);
      reset(newUser);
    });
  };

  const reset = (user: User1) => {
    setUsername(user.username);
    setPassword(user.password);
    setRoles([]);
  };

  return (
    <>
      <Button className="btn-edit" color="w" onClick={() => setIsOpened(true)}>
        <FontAwesomeIcon icon={faPen} />
      </Button>
      <Modal
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalBody>
          <p style={{ textAlign: "center", color: "#b79e56", fontSize: 20 }}>
            {" "}
            <FormattedMessage id="users.edit.dialog.title" />
          </p>
          <Form>
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
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Label for="password">
                <FormattedMessage id="user.password" />
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input
                checked={roles.includes("formatrice")}
                type="checkbox"
                onChange={() => handleCheckbox("formatrice")}
              />
              <Label check={roles.includes("formatrice")}>
                <FormattedMessage id="role.formatrice" />
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input
                checked={roles.includes("voyants")}
                type="checkbox"
                onChange={() => handleCheckbox("voyants")}
              />
              <Label check={roles.includes("voyants")}>
                <FormattedMessage id="role.voyants" />
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input
                checked={roles.includes("admin")}
                type="checkbox"
                onChange={() => handleCheckbox("admin")}
              />
              <Label check={roles.includes("admin")}>
                <FormattedMessage id="role.admin" />
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            style={{ backgroundColor: "#b79e56", border: 0, borderRadius: 80 }}
            onClick={submit}
          >
            <FormattedMessage id="button.confirm" />
          </Button>{" "}
          <Button
            style={{ backgroundColor: "gray", border: 0, borderRadius: 80 }}
            onClick={() => setIsOpened(false)}
          >
            <FormattedMessage id="button.cancel" />
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default UserEdit;
