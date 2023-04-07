import Button from '@/components/atoms/button/Button';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <nav>
      <h1>Daniel Lozada</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/projects/">Projects</Link>
        </li>
      </ul>
      <Button
        classname="navbar"
        type="button"
        text={'Contact'}
        isDisabled={false}
      />
    </nav>
  );
};

export default Navbar;
