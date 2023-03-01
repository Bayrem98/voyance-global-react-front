import { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { FormattedMessage } from "react-intl";
import { deleteUsers1 } from "../../../action/Users/actionQ";
import User1 from "../../../@Types/User1";

interface UserDeletePropsType {
  user: User1;
  refresh: () => void;
}

const UserDelete = ({ user, refresh }: UserDeletePropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const submit1 = () => {
    deleteUsers1(user, () => {
      refresh();
      setIsOpened(false);
    });
  };

  return (
    <>
      <Button
        className="btn3-delete"
        color="danger"
        onClick={() => setIsOpened(true)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </Button>
      <Modal
        className="font-['Helvetica']"
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader
          className="bg-danger text-white"
          toggle={() => setIsOpened(!isOpened)}
        >
          <FormattedMessage id="users.delete.dialog.title" />
        </ModalHeader>
        <ModalBody>
          <FormattedMessage id="users.delete.dialog.text" /> {user.username} ?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={submit1}>
            <FormattedMessage id="button.confirm" />
          </Button>{" "}
          <Button onClick={() => setIsOpened(false)}>
            <FormattedMessage id="button.cancel" />
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default UserDelete;
