import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import Button from '@/components/atoms/button/button';
import "./navbar.scss";

const Navbar = () => {
  const { allContentfulNavbar } = useStaticQuery(
  graphql`query GET_NAV_CONTENT {
      allContentfulNavbar(filter: {name: {eq: "Daniel Lozada"}}) {
        nodes {
          title
          list
          button {
            copy
            cta
          }
        }
      }
    }`
  );

  const {title , list, button} = allContentfulNavbar.nodes[0];

  return (
    <nav className={'m-navbar'}>
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to="/">{list[0]}</Link>
        </li>
        <li>
          <Link to="/about/">{list[1]}</Link>
        </li>
        <li>
          <Link to="/projects/">{list[2]}</Link>
        </li>
      </ul>
      <Button
        classname="navbar"
        type="button"
        text={button.copy}
        isDisabled={false}
      />
    </nav>
  );
};

export default Navbar;
