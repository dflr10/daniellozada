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
  interface Navbar {
    title: string; 
    list: string; 
    button: any;
  };
  
  const navbar : Navbar = allContentfulNavbar.nodes[0];
  
  return (
    <nav className={'m-navbar'}>
      <h2>{navbar.title}</h2>
      <ul>
        <li>
          <Link to="/">{navbar.list[0]}</Link>
        </li>
        <li>
          <Link to="/about/">{navbar.list[1]}</Link>
        </li>
        <li>
          <Link to="/projects/">{navbar.list[2]}</Link>
        </li>
      </ul>
      <Button
        classname="navbar"
        type="button"
        text={navbar.button.copy}
        isDisabled={false}
      />
    </nav>
  );
};

export default Navbar;
