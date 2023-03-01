import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { ButtonGroup, Container, Table } from "reactstrap";
import User1 from "../../@Types/User1";
import { getUsersss } from "../../action/Users/actionQ";
import UserDelete from "./users/UserDeleteQ";
import UserEdit from "./users/UserEditQ";

const UsersQuiz = () => {
  const navigate = useNavigate();

  const [users, setUsersss] = useState<User1[]>([]);

  useEffect(() => {
    getUsersss(setUsersss); // aka setUsers(data)
  }, []);
  return (
    <>
      <div
        className="container-fluid"
        style={{ paddingTop: 30, paddingBottom: 140 }}
      >
        <div className="row">
          <div className="col-md-4">
            <section
              style={{ backgroundColor: "#f9f9f9", width: 300, height: 450 }}
            >
              <p
                style={{
                  paddingLeft: 55,
                  paddingTop: 20,
                  fontWeight: "bold",
                }}
              >
                <img
                  style={{ paddingRight: 12 }}
                  src="/admin-img/info-icon.png"
                  alt=".."
                  width={40}
                />
                ADMINISTRATION
              </p>
              <hr
                style={{
                  borderStyle: "solid",
                  color: "#b79e56",
                  borderWidth: 1,
                }}
              ></hr>
              <ul>
                <div style={{ color: "#06989b" }}>Tous les utilisateurs :</div>
                <br />
                <li>
                  <div>
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      href="/supadmin"
                    >
                      Sup-admin
                    </a>
                  </div>
                </li>
                <br />
                <li>
                  <div>
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      href="/usersbiblo"
                    >
                      Bibliothéque
                    </a>
                  </div>
                </li>
                <br />
                <li>
                  <div>
                    <a style={{ textDecoration: "none", color: "#b79e56" }}>
                      Quiz
                    </a>
                  </div>
                </li>
              </ul>
            </section>
          </div>
          <div className="col-md-8" style={{ paddingRight: 200 }}>
            <img
              src="/home-img/previous (1).png"
              alt=""
              height={35}
              width={35}
              onClick={() => navigate(-1)}
              style={{ cursor: "pointer" }}
            />
            <Container>
              <p
                style={{
                  color: "#06989b",
                  textAlign: "center",
                  fontSize: 25,
                }}
              >
                Les utilisateurs de Quiz
              </p>
              <Table bordered responsive hover>
                <thead
                  style={{
                    backgroundColor: "lightgray",
                  }}
                >
                  <tr>
                    <th>
                      <FormattedMessage id="user.username" />
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <FormattedMessage id="user.roles" />
                    </th>
                    <th
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <FormattedMessage id="user.actions" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.length ? (
                    users.map((user) => (
                      <tr key={user._id}>
                        <td
                          style={{
                            color: "#0e0e0ee7",
                            fontSize: 18,
                          }}
                        >
                          {user.username}
                        </td>
                        <td style={{ textAlign: "center" }}>{user.roles}</td>
                        <td style={{ textAlign: "center" }}>
                          <ButtonGroup>
                            <UserEdit
                              user={user}
                              refresh={() => getUsersss(setUsersss)}
                            />
                            <UserDelete
                              user={user}
                              refresh={() => getUsersss(setUsersss)}
                            />
                          </ButtonGroup>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={2}
                        className="text-center p-5"
                        style={{ color: "#0e0e0ee7" }}
                      >
                        <FontAwesomeIcon icon={faBoxOpen} size="4x" />
                        <br />
                        <FormattedMessage id="page.users.no-data" />
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersQuiz;
