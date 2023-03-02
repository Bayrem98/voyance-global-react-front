import { Card, CardBody, CardHeader } from "reactstrap";
const Admin1 = () => {
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
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      href="/usersquiz"
                    >
                      Quiz
                    </a>
                  </div>
                </li>
              </ul>
            </section>
          </div>
          <div className="col-md-8">
            <Card outline style={{ width: "35rem" }}>
              <CardHeader
                style={{
                  textAlign: "center",
                  color: "red",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                <img
                  src="/admin-img/attention.png"
                  alt="img"
                  width={35}
                  style={{ position: "absolute", left: 165, top: 5 }}
                />
                AVERTISSEMENT
              </CardHeader>
              <CardBody style={{ textAlign: "center" }}>
                Cette espace prive et interdit aux utilisateurs sauf ADMIN.
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default Admin1;
