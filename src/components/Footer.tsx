import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <>
      <section>
        <span
          className="navbar sticky-top navbar-light"
          style={{ backgroundColor: "#217575" }}
        >
          <p className="footer1" style={{ color: "white" }}>
            <FormattedMessage id="footer1" />
          </p>
          <hr className="footer-l" style={{ color: "#b79e56" }}></hr>
          <p className="footer2" style={{ color: "white" }}>
            <FormattedMessage id="footer2" />
          </p>
        </span>
      </section>
    </>
  );
};
export default Footer;
