import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">SR Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Downtown Vancouver, SR Repairs provides a trained
          staff ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          SR Repairs
          <br />
          555 Marine Drive
          <br />
          Vancouver, V7T 7T2
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: Soheil</p>
      </main>
      <footer>
        <Link to="/login">Staff Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
